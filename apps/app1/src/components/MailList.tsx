import { useDispatch, useSelector } from "react-redux";
import { deleteEmail, Email, emailSelector } from "../store/store";
import { Button, Card, Modal, Row, Table } from "antd";
import { useState } from "react";
import { useShadowDOM } from "./ShadowDOM";

export default function MailList() {
  const emails = useSelector(emailSelector);
  const dispatch = useDispatch();
  const [selectedEmail, setSelectedEmail] = useState<Email | undefined>();
  const shadowRoot = useShadowDOM();
  return (
    <>
      {selectedEmail !== undefined && (
        <Modal
          getContainer={() => shadowRoot as unknown as HTMLElement}
          title="메일 상세"
          open={selectedEmail !== undefined}
          onCancel={() => setSelectedEmail(undefined)}
        >
          <Card>
            <Row>보낸사람 : {selectedEmail.sender}</Row>
            <Row>받은사람 : {selectedEmail.receiver}</Row>
            <Row>내용 : {selectedEmail.content}</Row>
          </Card>
        </Modal>
      )}
      <Table
        onRow={(mail) => ({
          onClick() {
            setSelectedEmail(mail);
          },
        })}
        style={{
          cursor: "pointer",
        }}
        rowKey={(data) => data.id}
        columns={[
          {
            dataIndex: "sender",
            title: "보낸사람",
          },
          {
            dataIndex: "receiver",
            title: "받은사람",
          },
          {
            dataIndex: "content",
            title: "내용",
          },
          {
            dataIndex: "id",
            title: "처리",
            render(value: number) {
              return (
                <Button
                  danger
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(deleteEmail(value));
                  }}
                >
                  삭제
                </Button>
              );
            },
          },
        ]}
        dataSource={emails}
      />
    </>
  );
}
