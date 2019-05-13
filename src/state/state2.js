import taskList from './taskList'

let  state = {
    taskList: taskList,
    clikedBurger:null,
    opis:false,
    contractor_object:{
        "id": 37,
        "first_name": "Алексей",
        "last_name": "Кузнецов",
        "is_idler": false
    },
    owner_object:{
        "id": 37,
        "first_name": "Алексей",
        "last_name": "Кузнецов",
        "is_idler": false
    },
    nameFilter:'owner_object'
}
export default state