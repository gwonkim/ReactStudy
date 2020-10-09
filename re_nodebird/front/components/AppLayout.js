import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </ Menu.Item>
            </ Menu>
            <Row>
                <Col xs={24} md={6}>
                    왼쪽 메뉴
    </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    오른쪽
    </Col>
            </Row>


            <Link href="/signup">
                <a><Button>회원가입</Button></a>
            </Link>

        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;

/* index랑 profile이랑 signup가 공통적으로 사용할 레이아웃 */