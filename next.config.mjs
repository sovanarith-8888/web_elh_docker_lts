import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
};


export default withNextVideo(withNextIntl(nextConfig), { folder: 'y' });