import Head from 'next/head'
const Meta = (props) => (      
    <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <link rel="icon" type="image/png" href="https://i.ibb.co/kxyQ2gC/icons8-lecturer-80.png" />
    {/* <link rel="apple-touch-icon" href="/static/images/favicon.ico" /> */}
    {/* <link rel="stylesheet" href="" />   */}
    <link rel="canonical" href={props.canonical} />
    {/* <script type="text/javascript" src="" ></script> */}
    </Head>
)
export default Meta