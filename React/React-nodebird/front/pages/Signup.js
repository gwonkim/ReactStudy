import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button} from 'antd';

const onSubmit = () => {

}

const onChangeId = () => {
    
}

const onChangeNick = () => {
    
}

const onChangePassword = () => {
    
}

const onChangePasswordChk = () => {
    
}

const onChangeTerm = () => {
    
}



const Signup = () => {
    return (
        <>
        <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"></link>
                <script src="http://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.js" />
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" required onChange={onChangeId} /> 
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" required onChange={onChangeNick} /> 
                    </div>
                    <div>
                        <label htmlFor="user-pass">비밀번호</label>
                        <br />
                        <Input name="user-pass" required onChange={onChangePassword} /> 
                    </div>
                    <div>
                        <label htmlFor="user-pass-chk">비밀번호체크</label>
                        <br />
                        <Input name="user-pass-chk" required onChange={onChangePasswordChk} /> 
                    </div>
                    <div>
                       <Checkbox name="user-term" onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                    </div>
                    <div>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;