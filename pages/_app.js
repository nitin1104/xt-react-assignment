import App from 'next/app';
import Page from '../components/Page'
import { makeStore } from '../redux/store';
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import {createStore} from 'redux';

export default withRedux(makeStore, {debug: true})(class MyApp extends App {
    
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                dispatch: ctx.store.dispatch,
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };

    }

    render () {
        const { Component } = this.props;

        return (
            <Provider store={this.props.store}> 
                <Page>
                    <Component {...this.props.pageProps}/>
                </Page>
            </Provider>
        )
    }
    
})