import React from 'react';
import { Page, Site } from '../_includes/types/data';
import PageWrapper from '../_includes/components/PageWrapper';
import TopicDirectory from '../_includes/components/TopicDirectory';

// types are used instead of proptypes
// yay for provably correct templates
interface IndexProps {
  // whats: Topic[];
  page: Page;
  site: Site;
}

// props are provided by Eleventy - they combine eleventy metadata
// and the data from _data/*.js
export default function Index({ page, site }: IndexProps) {
  return (
    <PageWrapper page={page} title={site?.whatIDo?.title}>
      <h1>{site?.toolsIUse?.title}</h1>
      <TopicDirectory items={site.toolsIUse?.featuredTopics} pathPrefix="does" HeadingTag="h2" />
    </PageWrapper>
  );
}
