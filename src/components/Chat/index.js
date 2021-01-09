import React from 'react'
import './index.scss'
const messageData=[
    {
        userId: 1,
        message: 'Hey'
    },
    {
        userId: 2,
        message: 'Hi'
    },
    {
        userId: 2,
        message: 'I was wondering if you want to have a trip tomorrow'
    },
    {
        userId: 1,
        message: 'sure'
    },
    {
        userId: 2,
        message: 'when'
    },
    {
        userId: 1,
        message: 'Was wondering if you want to have a trip tomorrow and I was wondering if you want to have a trip tomorrow,I was wondering if you want to have a trip tomorrow'
    },
    {
        userId: 2,
        message: 'Then nandi hills and will see the sunrise together.'
    },
    {
        userId: 1,
        message: 'Done then'
    },

]
export default class Chat extends React.Component{
    state={
        messageData: messageData,
        newMessage:''
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.query !== this.props.query) {
    //       this.findQuery();
    //     }
    //   }
    // findQuery=()=>{
    //     let {newMessage,messageData}= this.state
    //     let {query}= this.props
    //     messageData.map((eachMsg,index)=>{
    //         if(eachMsg.message.indexOf(query) >-1){
    //             console.log(eachMsg.message)
    //         }
    //         return
    //     })
    // }
    userMessage=(e)=>{
        this.setState({
            newMessage: e.target.value
        })
    }
    sendMsg=()=>{
        let {newMessage,messageData}= this.state
        let latestMsg={userId: 2, message: newMessage };
        let newMessageData=[...messageData,latestMsg]
        this.setState({
            messageData: newMessageData,
            newMessage:''
        })
    }
    render(){
        let {newMessage,messageData}= this.state
        let {query}= this.props

        return(
            <div className='wrapper-chat'>
                <div className='chat'>
                    {messageData.map((userInstance,index)=>{
                        console.log(query.length)
                         if(query.length >0 && userInstance.message.indexOf(query)> -1){
                            let orgMsg=userInstance.message;
                            let msg= orgMsg.split(" ").map(word => {
                                if(word.indexOf(query) > -1){
                                    return <span style={{ backgroundColor: '#ffff00db',color: '#000' }}>{`${word} `}</span>;
                                }else{
                                    return <span>{`${word} `}</span>;
                                }
                              })
                            return <div key={`${userInstance.userId}-${index}`} className={`individual-chat ${userInstance.userId === 1 ? 'left' :'right'}`}>{msg} </div>
                         }else{
                        return <div key={`${userInstance.userId}-${index}`} className={`individual-chat ${userInstance.userId === 1 ? 'left' :'right'}`}>{userInstance.message} </div>
                         }
                    })}
                </div>
                <input value={newMessage} placeholder="Type a message" onChange={this.userMessage}/>
                <button onClick={this.sendMsg}>Send</button>
            </div>
        )
    }
}