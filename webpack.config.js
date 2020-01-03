var webpack = required ('webpack');
var path = require ('path');
module.exports = {
    devtool: 'inline-source-map', //dor making debugging easier
    entry: {
        'index':'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module:{
        rules:[//we add multiple rule 
            //we createdifferent objects 
            {
                test:/\.js$/,
                exclude:/node_module/,
                use:'babel-loader'
            }
        ]
    },
    //dev server to serve the applicationn, only in the development 
    devServer:{
        contentBase: path.join(__dirname, "public/"),
        port:3030,//hme reloading 
        hot:true,
        publicpath:"http://localhost:3030/dist/"
    }
}