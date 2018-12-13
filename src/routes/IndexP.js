import React from 'react';
import { connect } from 'dva';
import { Button, Table } from 'antd';

function IndexP({ dispatch, indexP }) {

  const columns = [
    { title: '序号', dataIndex: 'key', key: 'key' },
    { title: 'name', dataIndex: 'name', key: 'name' },
    { title: 'sex', dataIndex: 'sex', key: 'sex' },
    { title: 'age', dataIndex: 'age', key: 'age' },
  ]

  const pagination = {
    total: indexP.total,
    current: indexP.page,
    pageSize: indexP.size,
    onChange: (pageNo) => {
      onPageChange(pageNo)
    },
    showSizeChanger: true,
    onShowSizeChange: SizeChange,
    showQuickJumper: true,
    showTotal: (total) => { return `共 ${indexP.total} 条` },
  };

  function SizeChange(current, pageSize) {
    dispatch({ type: 'indexP/updatePayload', payload: { size: pageSize, page: 1 } })
  }

  function onPageChange(pageNo) {
    var offset = pageNo * indexP.size - indexP.size;
    dispatch({ type: 'indexP/updatePayload', payload: { page: pageNo } })
  }


  function changeValue(i) {
    var list = indexP.list
    list[i].name = Math.ceil(Math.random() * 100)
    dispatch({
      type: 'indexP/updatePayload',
      payload: {
        list
      }
    })
  }

  return (
    <div>
      <ul>
        {indexP.list.length > 0 && indexP.list.map((v, i) => (
          <li key={i} onClick={() => changeValue(i)}>{v.name}</li>
        ))}
      </ul>
      <Table
        columns={columns}
        dataSource={indexP.list}
        pagination={pagination}
      />
    </div>
  );
}

IndexP.propTypes = {
};

function mapStateToProps({ menu,indexP }) {
  return { menu,indexP }
}

export default connect(mapStateToProps)(IndexP);
