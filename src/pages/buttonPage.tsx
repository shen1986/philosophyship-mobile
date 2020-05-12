import React from 'react'
import Content from '../components/Content/content'
import Panel from '../components/Panel/panel'
import Button from '../components/Button/button'


function ButtonPage() {
    return (
        <Content>
            <Panel
                title="标准按钮"
            >
                <Button>默认按钮</Button>
                <Button btnType="primary">主操作按钮</Button>
                <Button btnType="warning">警示按钮</Button>
                <Button btnType="disabled" onClick={()=>alert(1)}>不可用按钮</Button>
            </Panel>
            <Panel
                title="大按钮"
                noPadding={true}
            >
                <Button size="large">大按钮</Button>
                <Button btnType="primary" size="large">大按钮</Button>
                <Button btnType="warning" size="large">大按钮</Button>
                <Button btnType="disabled" size="large">大按钮</Button>
            </Panel>
            <Panel
                title="小按钮"
            >
                <Button size="small">小按钮</Button>
                <Button btnType="primary" size="small">小按钮</Button>
                <Button btnType="warning" size="small">小按钮</Button>
                <Button btnType="disabled" size="small">小按钮</Button>
            </Panel>
        </Content>
    );
}

export default ButtonPage;
