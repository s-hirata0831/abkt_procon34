import React, {useState} from 'react';

export const First = () => {
    const [inputText, setInputText] = useState('');
    const onChangeText = (event) => setInputText(event.target.value);

    const onClickAdd = () => {
        if(inputText === "") return;
        

    };
    
    return (
        <>
            {/*TitleArea*/}
            <div className="title-area">
                <p className='title'>アイデアを記入しましょう</p>
                <p>例：さつまいも，月見</p>
            </div>

            {/*InputArea*/}
            <div className="input-area">
                <input placeholder='アイデアを入力' onChangeText />
                <button>追加</button>
            </div>

            {/*IdeaList*/}
            <div className='idea-area'>
                <p className="title">思いついたアイデア</p>
                <ul>
                    <div className='idea-list'></div>
                </ul>
            </div>

        </>
    );
}; 
