import * as React from "react";

import { HashRouter as Router, Route, Link } from "react-router-dom";
import Terms from "./Terms";
import Main from "./Main";
import Privacy from "./Privacy";
import { Provider, Relative, Absolute, Flex, Small, NavLink } from 'rebass'


interface Props {
}

interface State {
}

export default class App extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const styles = {
            btn:{
                color: "#005f4b", 
                fontSize: 25
            },
            lnk:{
                textDecoration: 'none'
            }
        }

        return (
            <div>
                <Router basename={process.env.PUBLIC_URL}>
                    <div>
                        <Provider>
                            <Relative pb={5}>
                                <Absolute zIndex={1} left={0} right={0} top={0}>
                                    <Flex is="header" p={3}>
                                        <Link style={styles.lnk} to={"/"} ><NavLink style={styles.btn}>Main</NavLink></Link>
                                        <Link style={{ textDecoration: 'none', marginLeft:"auto" }} to="/terms"><NavLink style={styles.btn}>Terms</NavLink></Link>
                                        <Link style={{ textDecoration: 'none', marginLeft:10 }} to="/privacy"><NavLink style={styles.btn}>Privacy Policy</NavLink></Link>
                                    </Flex>
                                </Absolute>
                            </Relative>
                        </Provider>

                        <Route exact path="/" component={Main} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/privacy" component={Privacy} />

                        <Flex is="footer" alignItems="center" p={3}>
                            <Small color="grey" ml="auto">© Weeatcher, 2018</Small>
                        </Flex>
                    </div>
                </Router>
            </div>
        )
    }
}