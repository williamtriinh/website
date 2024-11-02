/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer2"

export default withContentlayer({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.gr-assets.com"
      }
    ]
  }
});
