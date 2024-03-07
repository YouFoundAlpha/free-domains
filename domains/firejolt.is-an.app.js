addSubDomain({
  description: 'A website for my chat application',
  domain: 'is-an.app',
  subdomain: 'firejolt',
  owner: {
    email: 'youfoundalpha@alpha.is-a.dev',
  },
  record: {
    CNAME: 'edge.redirect.pizza'
  },
  proxy: true
});
