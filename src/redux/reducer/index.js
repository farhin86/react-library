
export default function reducer(state={userPosition:''}, action) {
    switch(action.type){
        case 'SDE1':
            return {
            userPosition: 'She is Software Develoment Engineer 1'
            }
        case 'SDE2':
            return{
                userPosition:'She is Software Develoment Engineer 2/ Senior Developer'
            }
        default:
            return 'Software Developer'

    }
}