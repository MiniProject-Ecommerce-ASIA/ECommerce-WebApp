// import { sanityClient } from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')
export const client = sanityClient({
    projectId: 'l85i3k2x',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
