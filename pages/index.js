import EventList from '../components/events/event-list'

import Head from 'next/head'

// import fs from 'fs/promises'
// import path from 'path'

function HomePage(props) {

  const { products } = props
  return (
    <div>
      <Head>
        <title>NextJs</title>
      </Head>
      <p>home page</p>
      <ul>
        {products.map(n => <li key={n.id}>{n.title}</li>)}
      </ul>
      {/* <EventList items={photos}></EventList> */}
    </div>
  )
}

export async function getStaticProps() {
  // const filePath = path.join(process.cwd(), 'data', 'dummy.json')
  // const jsonData = await fs.readFile(filePath)
  // const data = JSON.parse(jsonData)
  
  // 重定向
  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/no-data'
  //     }
  //   }
  // }

  // 404
  // if (data.products.length === 0) {
  //   return {notFound: true}
  // }

  return {
    props: {
      products: [{id: 'p1', title: 'product 1'}]
    },
    // revalidate: 10,
  }
}

export default HomePage