import React from 'react';
import { GridComponent, Inject, Toolbar, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Search'];
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Orders"></Header>
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}

      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees;