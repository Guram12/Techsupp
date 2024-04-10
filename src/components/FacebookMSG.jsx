"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';






export default function FacebookMSG() {
  return (
    <FacebookProvider appId="7285198641601457" chatSupport>
      <CustomChat pageId="1401548233425084"  minimized='true' />
    </FacebookProvider>
  )
}





