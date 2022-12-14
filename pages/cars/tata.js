import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/terra.module.css' 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,CardGroup, Card} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/tc.jpg" width="100" height="700"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/tcp.jpg" width="80" height="400"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/tcp1.jpg" width="80" height="400"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.carbike360.com/">CARS world</a>
        </h1>

        <p className={styles.description}>
          Details about the Cars
          <code className={styles.code}></code>
        </p>

       </main>
     
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="/tc.jpg" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            This is Fablous Car
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/tc2.jpg" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/tc3.jpg" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


      <footer className={styles.footer}>
        <a
          href="https://www.carbike360.com/"
          rel="Poweredby carbike360"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.PNG" alt="Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}