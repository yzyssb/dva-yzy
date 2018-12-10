import React from 'react';
import { connect } from 'dva';
import { Button, Table } from 'antd';
import { spawn } from 'child_process';

function IndexPage({ dispatch, indexPage }) {

  const columns = [
    { title: '序号', dataIndex: 'key', key: 'key' },
    { title: 'name', dataIndex: 'name', key: 'name' },
    { title: 'sex', dataIndex: 'sex', key: 'sex' },
    { title: 'age', dataIndex: 'age', key: 'age' },
  ]

  const pagination = {
    total: indexPage.total,
    current:indexPage.page,
    pageSize: indexPage.size,
    onChange: (pageNo) => {
        onPageChange(pageNo)
    },
    showSizeChanger:true,
    onShowSizeChange:SizeChange,
    showQuickJumper:true,
    showTotal: (total) => { return `共 ${indexPage.total} 条` },
};

function SizeChange(current, pageSize){
    dispatch({type: 'indexPage/updatePayload',payload:{size:pageSize,page:1}})
}

function onPageChange(pageNo){
    var offset = pageNo*indexPage.size-indexPage.size;
    dispatch({type: 'indexPage/updatePayload',payload:{page:pageNo}})
}


  function changeValue(i) {
    var list = indexPage.list
    list[i].name = Math.ceil(Math.random() * 100)
    dispatch({
      type: 'indexPage/updatePayload',
      payload: {
        list
      }
    })
  }

  return (
    <div style={{userSelect:'none'}}>
      <Button type="primary" style={{ margin: '20px 0' }}>Primary</Button>
      <ul>
        {indexPage.list.length > 0 && indexPage.list.map((v, i) => (
          <li key={i} onClick={() => changeValue(i)}>{v.name}</li>
        ))}
      </ul>
      <Table
        columns={columns}
        dataSource={indexPage.list}
        pagination={pagination}
      />
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(indexPage) {
  return { indexPage: indexPage.indexPage }
}

export default connect(mapStateToProps)(IndexPage);
