import React,{useRef, useEffect} from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import {ProfileContext} from '../../constants/globalContext';
import './index.scss';
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
        newMessage:'',
        openSmiley: false
    }
    // static contextType = ProfileContext;
    // componentDidUpdate(prevProps) {
    //     if (prevProps.query !== this.props.query) {
    //       this.findQuery();
    //     }
    //   }
    // findQuery=()=>{
    //     let {newMessage,messageData}= this.state
    //     let {query}= this.props

    //     const searched = messageData.map((chat) => {
    //         let message = chat.message.replace(query, `<mark>${query}</mark>`);
    //         return {
    //           ...chat,
    //           message
    //         };
    //       });
    //       this.setState({
    //         messageData: searched
    //       })
    // }
    userMessage=(e)=>{
        this.setState({
            newMessage: e.target.value
        })
    }
    sendMsg=(e)=>{
        if(e.key === 'Enter'){
            let {newMessage,messageData}= this.state
            let latestMsg={userId: 2, message: newMessage };
            let newMessageData=[...messageData,latestMsg]
            this.setState({
                messageData: newMessageData,
                newMessage:''
            })
        }
    }
    addEmoji=(e)=>{
        let {newMessage}= this.state
        let updatedMsg= `${newMessage}${e.native}`;
        this.setState({
            newMessage:updatedMsg
        })
    }
    componentDidMount(){
    }
    render(){
        let {newMessage,messageData,openSmiley}= this.state
        let {query}= this.props;
        let customStyle={backgroundColor: this.context.theme.background, color: this.context.theme.foreground}
        // if(newMessage !== ""){
        // throw new Error('I crashed!');
        // }
        return(
            <div className='wrapper-chat' style={customStyle}>
                <div className='chat'>
                    {messageData.map((userInstance,index)=>{
                        if(query.length >0 && userInstance.message.indexOf(query)> -1){
                            let orgMsg=userInstance.message;
                            let msg= orgMsg.split(" ").map(word => {
                                if(word.indexOf(query) > -1){
                                    return <mark>{`${word} `}</mark>;
                                }else{
                                    return <span>{`${word} `}</span>;
                                }
                                })
                            return <div key={`${userInstance.userId}-${index}`} className={`individual-chat ${userInstance.userId === 1 ? 'left' :'right'}`}>{msg} </div>
                        }else{
                            return <div key={`${userInstance.userId}-${index}`} className={`individual-chat ${userInstance.userId === 1 ? 'left' :'right'}`}>{userInstance.message} </div>
                        }
                    })}
                    <AlwaysScrollToBottom />
                </div>
                {openSmiley && <Picker className="smiley-picker" set='apple' onSelect={this.addEmoji} />}
                <div className='message-write-wrapper'>
                    <div className='import-smiley' onClick={()=>this.setState({openSmiley: !openSmiley})}>😀</div>
                    <input style={customStyle} className='message' value={newMessage} placeholder="Type a message" onChange={this.userMessage} onKeyPress={this.sendMsg}/>
                </div>
            </div>
        )
    }
}
Chat.contextType = ProfileContext;

const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };