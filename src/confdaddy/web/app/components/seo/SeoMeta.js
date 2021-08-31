import Head from 'next/head'
const Meta = (props) => (      
    <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    {/* <link rel="icon" type="image/png" href="/static/images/favicon.ico" /> */}
    {/* <link rel="apple-touch-icon" href="/static/images/favicon.ico" /> */}
    {/* <link rel="stylesheet" href="" />   */}
    <link rel="canonical" href={props.canonical} />
    {/* <script type="text/javascript" src="" ></script> */}
    </Head>
)
export default Meta