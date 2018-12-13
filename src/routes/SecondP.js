import React from 'react';
import { connect } from 'dva';
import { Button, Table } from 'antd';

function SecondPage({ dispatch, secondP }) {

  return (
    <div>
      2222
    </div>
  );
}

function mapStateToProps({ secondP }) {
  return { secondP }
}

export default connect(mapStateToProps)(SecondPage);
