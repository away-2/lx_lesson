import React, { useState, useEffect } from "react";
import { Resizable } from "react-resizable";
import { Table } from "antd";
// 需要引入resizziable的样式
// import "../../../../node_modules/react-resizable/css/styles.css";
import './index.css'

const ResizableTitle = (props) => {
  console.log("props", props);
  const {
    onResize,
    className,
    width = 100,
    title,
    children,
    ...restProps
  } = props;

  // const sty =Object.assign({},props, restProps)

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      handle={
        <span
          className="react-resizable-handle"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
    >
      <th {...props}>{children}</th>
    </Resizable>
  );
};

const ResizableTable = (props) => {
  const {
    rowKey = (record) => record.id,
    pagination = true,
    scroll = null,
    columns = [],
    dataSource = [],
    loading = false,
  } = props;

  const [column, setColumn] = useState([]);

  const handleResize = (col, size, oldColumn) => {
    const newColumns = [...oldColumn];
    newColumns.forEach((item) => {
      if (item.key === col.key) {
        item.width = size.width;
      }
    });

    setColumn(newColumns);
  };

  useEffect(() => {
    const newColumn = [...columns].map((it) => ({
      ...it,
      ellipsis: true,
      onHeaderCell: (col) => ({
        width: col.width,
        // !传入newColumn，而不传入column是因为需要拿到有onHeaderCell的值，外面collumn的变化内部监听不到
        onResize: (e, { size }) => handleResize(col, size, newColumn),
      }),
    }));
    setColumn(newColumn);
  }, [columns]);

  //   useEffect(() => {
  //     const newColumn = [...column].map((it) => ({
  //       ...it,
  //       ellipsis: {
  //         showTitle: true,
  //       },
  //       onHeaderCell: (col) => ({
  //         width: col.width,
  //         // !传入newColumn，而不传入column是因为需要拿到有onHeaderCell的值，外面collumn的变化内部监听不到
  //         onResize: (e, { size }) => handleResize(col, size, newColumn),
  //       }),
  //     }));
  //     setColumn(newColumn);
  //   }, []);

  return (
    <Table
      columns={column}
      dataSource={dataSource}
      loading={loading}
      pagination={pagination}
      scroll={scroll}
      rowKey={rowKey}
      components={{
        header: {
          cell: ResizableTitle,
        },
      }}
    />
  );
};

export default ResizableTable;
