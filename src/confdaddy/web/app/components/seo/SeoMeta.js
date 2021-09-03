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
    <script
        // GA_TRACKING_ID = 'G-Z5ZPZXG8BB'
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${'G-Z5ZPZXG8BB'}`}
    />
    <script
        dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${'G-Z5ZPZXG8BB'}', {
                page_path: window.location.pathname,
            });
            `,
        }}
    />
    </Head>
)
export default Meta