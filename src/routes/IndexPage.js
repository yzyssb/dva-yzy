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

  console.log(indexPage)
  // const indexPage=indexPage.indexPage

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
