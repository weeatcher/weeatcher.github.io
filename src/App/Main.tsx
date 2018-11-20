import * as React from "react";

import { Provider, Heading, Subhead, Flex } from 'rebass'
import {
    Hero, CallToAction, Phone, Feature
} from 'react-landing-page'


interface Props {
}

interface State {

}

export default class Main extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <Provider>
                <Hero
                    color='white'
                    bg='#005f4b'
                    backgroundImage='https://source.unsplash.com/9uX5cX1l3bw/1600x900'
                >
                    <Flex flexWrap='wrap' alignItems='center'>
                        <Flex alignItems='flex-start' width={[1, 2 / 5, 1 / 2]} p={2}>
                            <Phone src='./static/img/WeeatcherJob.png' color="black"
                                style={{ transform: 'translate(32px, 64px)' }} />
                            <Phone src='./static/img/WeeatcherMain.png' color='white'
                                style={{ transform: 'translate(-32px, 0px)' }} />
                        </Flex>
                        <Flex width={[1, 3 / 5, 1 / 2]} alignItems='center' flexDirection='column' p={2} >
                            <Heading>Weeatcher</Heading>
                            <Subhead fontSize={[1, 2]}>Monitoring and managing app</Subhead>
                            <Subhead fontSize={[1, 2]}>for Veeam Backup & Replication</Subhead>
                            <Flex mt={3} flexWrap='wrap' justifyContent='center'>
                                <CallToAction href='https://play.google.com/store/apps/details?id=com.weeatcher.mapp' bg="black">
                                    <text style={{ color: "white" }}>Google Play</text>
                                </CallToAction>
                            </Flex>
                        </Flex>
                    </Flex>
                </Hero>
                <Heading style={{ paddingTop: 50 }} textAlign="center">What is inside?</Heading>
                <Flex flexWrap="wrap" justifyContent="center">
                    <Feature icon="👁" description="Current status">
                        Monitor
                    </Feature>
                    <Feature icon="🛠" description="Jobs and Backups">
                        Manage
                    </Feature>
                    <Feature icon="😎" description="With Weeatcher">
                        Be sure
                    </Feature>
                </Flex>

            </Provider>
        )
    }
}