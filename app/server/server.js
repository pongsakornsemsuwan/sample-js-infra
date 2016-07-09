import express from 'express';
import newsRouter from './news-router';
import routes from './routes';

import React from 'react'
import {match, RouterContext} from 'react-router';
import {renderToString} from 'react-dom/server';

import ContextWrapper from '../components/common/ContextWrapper';

const app = express();
const PATH = require('path');
//const router = express.Router()

const VIEW_FOLDER = PATH.resolve(__dirname, 'views');

app.set('view engine' ,'ejs');
app.set('views', VIEW_FOLDER);
app.use(express.static('public'));
app.use('/api/news', newsRouter);

// app.get('/', function (req, res) {
//     res.render('index');
//     //res.send('Hello World!');
// });

app.get('*', (req, res) => {
    match({routes, location: req.originalUrl}, (err, redirectLocation, renderProps) => {
        console.log('react router match is called');
        const {promises, components} = mapComponentsToPromises(renderProps.components, renderProps.params);
        console.log(promises);

        Promise.all(promises).then((values) => {
            const data = prepareData(values, components);
            const html = render(renderProps, data);

            console.log('html');
            res.render('index', {
                content: html,
                context: JSON.stringify(data)
            });
        }).catch((err) => {
            res.status(500).send(err);
        });
    });
})

function mapComponentsToPromises(components, params) {
    const filteredComponents = components.filter((Component) => {
        return (typeof Component.requestData === 'function');
    });

    const promises = filteredComponents.map(function(Component) {
        //return Component.requestData(params, nconf.get('domain'));
        console.log('hellooooo');
        return Component.requestData(params, 'http://localhost:3000');
    });
    return {promises, components: filteredComponents};
}

function prepareData(values, components) {
    const map = {};

    values.forEach((value, index) => {
        map[components[0].NAME] = value.data;
        console.log('value data');
        console.log(value.data);
    });

    return map;
}

function render(renderProps, data) {
    let html = renderToString(
        <ContextWrapper data={data}>
            <RouterContext {...renderProps}/>
        </ContextWrapper>
    );

    return html;
}

app.listen(3000, () => {
    console.log(VIEW_FOLDER);
    console.log('Listening on http://localhost:3000');
});
