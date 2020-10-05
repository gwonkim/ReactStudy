import Prototypes from 'prop-types';

const AppLayout = ( { children }) => {
    return (
        <AppLayout>
            <div>공통메뉴</div>
            {children}
        </AppLayout>
        )
}

AppLayout.prototypes = {
    children: Prototypes.node.isRequired,
}

export default AppLayout;

/* index랑 profile이랑 signup가 공통적으로 사용할 레이아웃 */