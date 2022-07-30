import React from "react";
import styles from "../../styles/Home.module.css";
import { Image } from "@chakra-ui/react";

interface FooterProps {
    
}
 
interface FooterState {
    
}
 
class Footer extends React.Component<FooterProps, FooterState> {
    state = {   }
    render() { 
        return ( <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer> );
    }
}
 
export default Footer;

