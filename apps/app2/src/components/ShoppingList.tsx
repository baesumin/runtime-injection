import { useState } from "react";
import { Item, useItems } from "../store/store";
import Button from "./Button";
import Table from "./Table";
import Modal from "./Modal";

export default function ShoppingList() {
  const { items, deleteItem } = useItems();
  const [selectedItem, setSelectedItem] = useState<Item | undefined>();

  return (
    <>
      {selectedItem !== undefined && (
        <Modal
          open={selectedItem !== undefined}
          title={"상품 상세"}
          onClose={() => setSelectedItem(undefined)}
        >
          asdfsdaf
        </Modal>
      )}
      <Table
        columns={[
          {
            key: "name",
            title: "물품명",
          },
          {
            key: "price",
            title: "가격",
            render(value: number) {
              return value.toLocaleString() + "원";
            },
          },
          {
            key: "count",
            title: "수량",
            render(value: number) {
              return value.toLocaleString() + "개";
            },
          },
          {
            key: "id",
            title: "처리",
            render(value: string) {
              return (
                <Button
                  buttonType="cancel"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(value);
                  }}
                >
                  삭제
                </Button>
              );
            },
          },
        ]}
        datas={items}
        rowKey={(data) => data.id}
        onRowClick={(data) => setSelectedItem(data)}
      />
    </>
  );
}
