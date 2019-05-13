import React , {Component} from 'react';

class TableHead extends Component{
    render(){
        return(
            <thead className="table-bordered"> 
            <tr>
                <th scope="col">#</th>
                <th scope="col" width="200">Действие</th>
                <th scope="col">Статус</th>
                <th scope="col">Задача</th>
                <th scope="col">Проект</th>
                <th scope="col">Дата</th>
                <th scope="col">Исполнитель</th>
                <th scope="col">Постановщик</th>
                <th scope="col">Часы</th>
            </tr>
        </thead>
        )
    }
}
export default TableHead