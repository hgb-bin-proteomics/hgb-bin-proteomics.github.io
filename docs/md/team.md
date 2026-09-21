---
layout: home
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/viikiid.png',
    name: 'Viktoria Dorfer',
    title: 'Research Group Proteomics Lead',
    desc: 'Maintainer for MS Amanda.',
    links: [
      { icon: 'github', link: 'https://github.com/viikiid' },
      { icon: 'orcid', link: 'https://orcid.org/0000-0002-5332-5701' },
    ],
  },
  {
    avatar: 'https://www.github.com/michabirklbauer.png',
    name: 'Micha Birklbauer',
    title: 'Developer, PhD-Student',
    desc: 'Maintainer for MS Annika, pyXLMS, and READ.',
    links: [
      { icon: 'github', link: 'https://github.com/michabirklbauer' },
      { icon: 'orcid', link: 'https://orcid.org/0009-0005-1051-179X' },
    ],
    sponsor: 'https://ko-fi.com/michabirklbauer'
  },
  {
    avatar: 'https://github.com/louisebuur.png',
    name: 'Louise Buur',
    title: 'Developer, PhD-Student',
    desc: 'Maintainer for MS Andrea.',
    links: [
      { icon: 'github', link: 'https://github.com/louisebuur' },
      { icon: 'orcid', link: 'https://orcid.org/0000-0002-8653-2096' },
    ],
  },
  {
    avatar: 'https://github.com/esdeoh.png',
    name: 'Sebastian Dorl',
    title: 'Developer, PostDoc',
    desc: 'Maintainer for MS Ana.',
    links: [
      { icon: 'github', link: 'https://github.com/esdeoh' },
      { icon: 'orcid', link: 'https://orcid.org/0000-0003-0175-785X' },
    ],
  },
  {
    avatar: 'https://github.com/IAmReallyAlessio.png',
    name: 'Alessio Giuffrida',
    title: 'Developer, PhD-Student',
    desc: 'Developing spectrum cleaning algorithms.',
    links: [
      { icon: 'github', link: 'https://github.com/IAmReallyAlessio' },
    ],
  },
  {
    avatar: 'https://github.com/MarinaStrobl.png',
    name: 'Marina Strobl',
    title: 'Developer',
    desc: 'Maintainer for MS Amanda.',
    links: [
      { icon: 'github', link: 'https://github.com/MarinaStrobl' },
    ],
  },
]
</script>

<div style="text-align: center">

# Team

We are a small team of people passionate about all things proteomics and bioinformatics.

</div>

<VPTeamMembers size="medium" :members />
