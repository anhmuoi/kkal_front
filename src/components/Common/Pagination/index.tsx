import React, {useState } from 'react';
import { Pagination as PaginationComponent } from 'antd';
import "./styles.scss"
function Pagination({ itemsPerPage }:any) {

  return (
    <>
      <PaginationComponent   showSizeChanger={false} pageSize={10} defaultCurrent={1} total={100} />
    </>
  );
}
export default Pagination