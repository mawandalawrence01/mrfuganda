# Masaka Relief Foundation (MRF) - Comprehensive Website Plan

## Table of Contents

1. [Organization Overview](#1-organization-overview)
2. [Brand Identity](#2-brand-identity)
3. [Site Architecture & Navigation](#3-site-architecture--navigation)
4. [Page-by-Page Specification](#4-page-by-page-specification)
5. [Program Details (5 Core Pillars)](#5-program-details-5-core-pillars)
6. [Team & Governance](#6-team--governance)
7. [Media & Asset Inventory](#7-media--asset-inventory)
8. [Content & Copy](#8-content--copy)
9. [Technical Implementation Plan](#9-technical-implementation-plan)
10. [Design System & UI/UX](#10-design-system--uiux)
11. [File & Folder Structure](#11-file--folder-structure)
12. [Responsive & Accessibility Requirements](#12-responsive--accessibility-requirements)
13. [SEO & Performance](#13-seo--performance)
14. [Future Enhancements](#14-future-enhancements)

---

## 1. Organization Overview

### What is MRF?

**Masaka Relief Foundation (MRF)** is a local Non-Governmental Organization (NGO) founded in **May 2021**, headquartered in **Kisuuna Village, Nyendo Mukungwe Division, Masaka District, Uganda**.

### The Problem MRF Addresses

In Uganda, more than a third of all inhabitants live below the poverty line. Children, adolescents, and youth are the primary victims of this deplorable economic situation. Their families cannot ensure their health or well-being, particularly in remote regions. Children's rights are neglected and abused in many ways:

- Lack of access to education
- Child marriages
- Child labor
- Street living
- HIV/AIDS prevalence
- Lack of better health services

### Tagline / Motto

**"Considering Assistance and Relief Everywhere"**

### Vision

We envision a world where children, youths, and communities are empowered to live sustainable lives.

### Mission

Working together to connect people in the fight against poverty, investing in the lives of children, adolescents and youth, building the healthy environments they need to thrive, and empowering them to create lasting change in their own lives and communities.

### Core Values

| Value | Meaning |
|-------|---------|
| Social Justice | Ensuring fair treatment and equal opportunities for all |
| Equity | Addressing disparities in access to resources |
| Equality | Equal rights for all community members |
| Integrity | Honesty and transparency in all operations |
| Professionalism | High standards in service delivery |

### Goal

To assist government and private actors in bridging the social and economic empowerment gap prevailing among vulnerable children, adolescents, and youth.

### Geographic Coverage (Where We Work)

MRF operates across the **Greater Masaka Region** of Uganda:

1. **Masaka City** (Headquarters - Kisuuna Village)
2. **Lwengo District**
3. **Kalungu District**
4. **Bukomansimbi District**
5. **Sembabule District**
6. **Rakai District**
7. **Kyotera District**
8. **Kalangala District**
9. **Lyantonde District**

### Key Achievements / Legacy

- Transitioned from managing critical housing issues to community-wide support
- Established community boreholes (Butaaya Borehole Project)
- "One tank to 10 households" water tank distribution program
- Food relief programs for vulnerable households
- Education subsidies for orphans and vulnerable children (OVCs)
- Adolescent empowerment programs
- Sewing machine distribution for livelihood support
- Standing frame provision for disabled children (e.g., Jovan)
- Partnership with German organizations (Kolping Lathen, KLJB)

---

## 2. Brand Identity

### Logo

- **Shape**: Circular badge design
- **Primary element**: Orange circular border ring with "Masaka Relief Foundation" text curving along the top, "MRF" at the bottom
- **Center icon**: Red heart symbol above a white/black outlined open hand (representing care and giving)
- **Tagline** (in center, red text): "Considering Assistance and Relief Everywhere"
- **Accent**: Two asterisk stars flanking "MRF"
- **Logo file**: `documentation/MRF website-2022/Pictorial/MRF logo.jpg` and `documentation/more media for website March 2025/Masaka Relief.jpg`

### Color Palette (Derived from Logo)

| Color | Hex (Suggested) | Usage |
|-------|-----------------|-------|
| MRF Orange | `#F5A623` | Primary brand color, headers, CTAs, accents |
| MRF Red | `#E31B23` | Heart/tagline accent, highlights, alerts |
| Dark Text | `#1A1A1A` | Body text, headings |
| White | `#FFFFFF` | Backgrounds, card surfaces |
| Off-White | `#F9F7F4` | Section backgrounds, alternating rows |
| Dark Green | `#2D6A2E` | Environmental stewardship sections, success states |
| Warm Gray | `#6B6B6B` | Secondary text, captions |

### Typography (Recommended)

- **Headings**: Montserrat Bold / Poppins Bold (modern, strong, NGO-appropriate)
- **Body**: Open Sans / Inter (clean readability)
- **Accent/Quotes**: Playfair Display Italic (testimonials, ED message)

---

## 3. Site Architecture & Navigation

### Primary Navigation (Top Bar)

```
[MRF Logo]   Home   |   Who We Are   |   What We Do   |   Publications   |   Media   |   Contact
                                                                              [Donate Button]
```

### Complete Sitemap

```
/
├── index.html                          (Home Page)
├── who-we-are.html                     (Who We Are)
│   ├── #our-story                      (Our Story / Founder Marlies Burter)
│   ├── #our-commitment                 (Message from Executive Director)
│   ├── #our-team                       (Staff & Leadership)
│   ├── #our-partners                   (Partners & Donors)
│   └── #careers                        (Career Opportunities)
├── what-we-do.html                     (What We Do)
│   ├── #where-we-work                  (Geographic Coverage Map)
│   └── #our-programs                   (5 Core Program Pillars)
│       ├── #child-youth-empowerment
│       ├── #community-health
│       ├── #sustainable-livelihoods
│       ├── #household-stability
│       └── #environmental-stewardship
├── publications.html                   (Publications & Reports)
│   └── Downloadable PDFs
├── media.html                          (Media Hub)
│   ├── #gallery                        (Photo Gallery)
│   ├── #testimonies                    (Success Stories)
│   └── #news-blog                      (News & Blog)
└── contact.html                        (Contact Us)
    ├── Contact Form
    ├── Map Embed
    └── Social Links
```

---

## 4. Page-by-Page Specification

### 4.1 HOME PAGE (`index.html`)

**Purpose**: First impression, emotional impact, drive engagement and donations.

#### Section 1: Hero Banner
- **Type**: Full-width image/video carousel or single hero with overlay
- **Content**:
  - Large impact photo (community gathering, borehole launch, food distribution)
  - Overlay text: Organization name + tagline
  - Primary CTA: "Support Our Mission" / "Donate Now"
  - Secondary CTA: "Learn More"
- **Design**: Full viewport height, dark overlay gradient on image, white text

#### Section 2: Our Goal
- **Layout**: Centered text block with decorative elements
- **Content**: MRF's goal statement
- **Quote**: "To assist government and private actors in bridging the social and economic empowerment gap prevailing among vulnerable children, adolescents, and youth."

#### Section 3: Vision & Mission
- **Layout**: Two-column card layout (or side-by-side panels)
- **Left card**: Vision statement with icon
- **Right card**: Mission statement with icon
- **Background**: Light off-white or subtle pattern

#### Section 4: Core Values
- **Layout**: Horizontal row of 5 icon-cards
- **Items**: Social Justice, Equity, Equality, Integrity, Professionalism
- **Design**: Each with an icon, title, and one-line description

#### Section 5: Our Impact (NEW - Statistics Counter)
- **Layout**: Full-width colored banner (MRF Orange background)
- **Content**: Animated counting numbers on scroll
  - `9+` Districts Covered
  - `2021` Year Founded
  - `10+` OVCs Supported with Education
  - `XXX` Households Reached with Water Tanks
  - `XXX` Community Boreholes Built
- **Note**: Exact numbers to be confirmed with MRF team

#### Section 6: How to Help Our Mission (NEW - Featured Projects/Campaigns)
- **Layout**: 3-column card grid
- **Content**: Highlight current projects that need funding
  - Each card: Project image, title, brief description, progress bar (if applicable), "Fund This Project" CTA
- **Examples**:
  - Education Subsidy Program
  - Borehole Construction
  - Water Tank Distribution

#### Section 7: Our Programs Overview
- **Layout**: 5 icon-based cards in a responsive grid
- **Content**: Brief preview of each of the 5 core pillars with "Learn More" links
- **Links**: Each card links to `what-we-do.html#[pillar-anchor]`

#### Section 8: Partners
- **Layout**: Logo carousel / logo grid
- **Partners**: Kolping Lathen, Starverner Mujmokers Germany, KLJB Germany, Masaka District Local Government, Masaka City NGO Forum

#### Section 9: Footer
- Standard footer (see Section 4.7)

---

### 4.2 WHO WE ARE PAGE (`who-we-are.html`)

**Purpose**: Tell MRF's story, build trust, introduce team.

#### Tab/Section Navigation (internal tabs or scroll sections):
- Our Story | Our Commitment | Our Team | Our Partners | Careers

#### Tab 1: Our Story
- **Content**: MRF founding story
  - Founded May 2021 in Kisuuna Village, Nyendo Mukungwe Division, Masaka District
  - Realized that 1/3 of Uganda lives below poverty line
  - Children are primary victims
  - Narrative about the organization's journey
- **Visual**: Timeline or narrative layout with photos
- **Founder story**: Meet our founder Marlies Burter (story to be provided)

#### Tab 2: Our Commitment (Message from Executive Director)
- **Content**: Full ED message from Madrine Namayengo:

  > "Welcome to Masaka Relief Foundation (MRF) website. I am extremely proud of what we have been able to achieve since our inception in 2021, and I am even more excited about our outlook for an equally promising future. We have successfully managed operation in Greater Masaka. We have transitioned from managing critical housing issues to gathering the support of our community and establishing strategies to end social injustices and promote community wellbeing of our communities."
  >
  > "It is satisfying to know that we have the support of our local government, our staff, our friends and our community in acquiring the necessary resources to reach our goals. This collective support enables us to continue to launch new strategies and establish new partnerships. As a result, we are able to ensure that families in our communities have a safe and stable water supply, good quality education among others."
  >
  > "MRF's biggest legacy is probably the impact it has had on children, their mothers, youth and communities empowered to achieving social justice and peace within households and among the immediate neighbors."
  >
  > "MRF will continue to fulfill her mandate, looking forward to achieving all planned activities. We look forward to working with you as we extend assistance and relief everywhere."
  >
  > — **Madrine Namayengo**, Executive Director

- **Photo**: Professional headshot of ED (file: `CEO1 flpped.jpg`)
- **Layout**: Photo on left, message on right (desktop); stacked on mobile

#### Tab 3: Our Team
- **Layout**: Team member cards in a grid

| Name | Position | Photo |
|------|----------|-------|
| Namayengo Madrine | Executive Director | `CEO1 flpped.jpg` / `CEO2.jpg` |
| Bulega Francis | Programs Coordinator | To be provided |
| Robert Kabanda | Head Quality Control & Compliance | To be provided |
| Ssebwami Henry | Project Officer | To be provided |
| Namuleme Caroline | Project Assistant | To be provided |
| Nakimera Fatuma | Administrative Assistant | To be provided |

- **Board of Directors**: Separate subsection with table/cards (profiles to be completed)
  - Board Chairperson
  - Vice Chairperson
  - Founder Member
  - Board Members
  - Community Representative to the Board

#### Tab 4: Our Partners & Network
- **Categories**:
  - **Donors**: Kolping Lathen, Starverner Mujmokers Germany, KLJB Germany
  - **Government**: Central and local governments, Masaka District Local Government
  - **Community**: Schools and institutions, the community
  - **Other CSOs**: Development partners, Civil Society Organizations
- **Layout**: Partner logos in grid with names underneath

#### Tab 5: Careers (NEW)
- **Content**: Available opportunities listing
- **Layout**: Job listings page with filterable cards
- **Each listing**: Position title, description, requirements, application instructions
- **If no openings**: "No current openings. Sign up for alerts." with email subscription

---

### 4.3 WHAT WE DO PAGE (`what-we-do.html`)

**Purpose**: Showcase programs and geographic reach.

#### Section 1: Where We Work (NEW)
- **Interactive map** of Uganda highlighting Greater Masaka Region districts
- **Districts listed**: Masaka City, Lwengo, Kalungu, Bukomansimbi, Sembabule, Rakai, Kyotera, Kalangala, Lyantonde
- **Design**: SVG map or embedded map with highlighted regions
- **Each district**: Clickable/hoverable with brief info popup

#### Section 2: Our Programs (5 Core Pillars)

Each pillar presented as an expandable accordion or tabbed section with:
- Title + icon
- "What it encompasses" section
- "Our Focus" section
- Related photos from documentation
- Impact statistics (where available)

*Full pillar content in Section 5 below.*

---

### 4.4 PUBLICATIONS PAGE (`publications.html`)

**Purpose**: Host reports, annual reviews, and other documents.

#### Content:
- **Layout**: Card grid with document thumbnails
- **Available Documents**:
  1. Annual Report 2021 (`Annual report 2021.pdf`)
  2. MRF Annual Report 2022 (`MRF annual report 2022.pdf`)
  3. Butaaya Borehole Launch 2024 / Site Briefer and Report 2023 (`Butaaya Borehole launch 2024_ SITE Briefer and report 2023.pdf`)
- **Each card**: PDF thumbnail preview, title, year, download button
- **Filter**: By year or document type
- **Upload capability**: Admin should be able to add new documents (future CMS consideration)

---

### 4.5 MEDIA PAGE (`media.html`)

**Purpose**: Showcase visual evidence of impact through photos, videos, and stories.

#### Tab 1: Gallery
- **Layout**: Masonry/grid photo gallery with lightbox
- **Categories/Filters**: By program area, by year, by location
- **Photo sources**:
  - `Pictorial/` folder: Boreholes, water tanks, beneficiaries, team events
  - `Pictorial 2023/MRF PHOTOS WITH LOGO/`: ~40+ branded event photos
  - `MRF phots/`: 43 Canva-designed program photos
  - `more media for website March 2025/`: Education subsidy, food relief, borehole construction photos
- **Photo descriptions**: Alt text and captions for each photo

#### Tab 2: Testimonies / Success Stories
- **Layout**: Story cards with before/after photos
- **Known Stories** (from documentation photos):
  - **Jovan**: Child who received a standing frame (disability support)
  - **Shamira**: Before: not in school → Now receiving formal education
  - **Lynnet**: Received pampers and essential supplies
  - **Namanda**: Received sewing machine for livelihood (2 photos of machine + family)
  - **Elizabeth**: Beneficiary story
  - **Mukadde Namagembe**: Received water tank
  - **Water Tank Recipients**: Multiple success stories from the WASH program
- **Each story**: Photo, name (with consent), before/after narrative, program area

#### Tab 3: News & Blog
- **Layout**: Blog-style listing with featured image, title, date, excerpt
- **Content**: Press releases, event recaps, program updates
- **Initially**: Can feature existing events like:
  - Butaaya Borehole Launch
  - Food Relief Distribution (December 2023)
  - Education Subsidy Distribution (Term 1 & 3, 2025)
  - Adolescent Programs events

#### Video Gallery (within Gallery or separate sub-tab)
- **Available Videos**:
  1. Adolescent Programs (`adolescent programs.mp4`)
  2. Borehole Excavation at Butaaya (`Borehole escarvation at Butaaya.mp4`)
  3. Food Relief to Vulnerable Households Dec. 2023 (`Food relief to vulnerable households Dec. 2023.mp4`)
  4. MRF Arrives at Nakateete (`MRF arrives at nakateete.mp4`)
  5. Water Tank Distribution (`water tank.mp4`)
  6. MRF at Ggulama Secondary School, Nakateete (`MRF GGULAMA SEC SCH NAKATEETE.mp4`)

---

### 4.6 CONTACT PAGE (`contact.html`)

**Purpose**: Enable visitors to reach out, donate, volunteer, or partner.

#### Content:
- **Contact Information**:
  - Address: Masaka Relief Foundation, P.O. Box 109, Masaka, Uganda
  - Phone: +256 706 333 500 / +256 781 236 221
  - Email: mrf19.ug@gmail.com
- **Contact Form**: Name, Email, Subject, Message, Submit button
- **Embedded Map**: Google Maps showing Kisuuna Village, Nyendo Mukungwe Division, Masaka
- **Get Involved section**:
  - "Become a Volunteer" — brief description + CTA
  - "Become a Partner" — brief description + CTA
  - "Donate" — brief description + CTA

---

### 4.7 FOOTER (Global Component)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [MRF Logo]                                                            │
│  Considering Assistance and Relief Everywhere                          │
│                                                                        │
│  Quick Links        Programs              Contact Us                   │
│  ─────────          ─────────             ──────────                   │
│  Home               Child & Youth         P.O. Box 109, Masaka        │
│  Who We Are         Community Health      +256 706 333 500             │
│  What We Do         Sust. Livelihoods     +256 781 236 221            │
│  Publications       Household Stability   mrf19.ug@gmail.com          │
│  Media              Env. Stewardship                                   │
│  Contact                                  [Social Media Icons]         │
│                                                                        │
│  Newsletter Signup: [Email input] [Subscribe]                          │
│                                                                        │
│  ─────────────────────────────────────────────────────────────────────  │
│  © 2025 Masaka Relief Foundation. All rights reserved.                 │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Program Details (5 Core Pillars)

### Why the Restructuring?

MRF previously had 8 program areas (Advocacy, Education, Child Protection, Emergency Relief, Livelihood Support, Reproductive Health, WASH, Environmental Protection). These have been strategically regrouped into **5 core pillars** to better reflect MRF's holistic, integrated approach to community development.

---

### Pillar 1: Child & Youth Empowerment

**Icon suggestion**: Shield with child silhouette / Graduation cap

**Encompasses**: Child Protection + Education

**Description**: We work to create safe environments where children can thrive, free from violence, exploitation, and abuse. Simultaneously, we champion access to quality education, ensuring children and youth develop the skills, knowledge, and confidence to reach their full potential and become active, engaged citizens.

**Activities**:
- Formation and training of child protection committees
- Community dialogue meetings on child protection
- Translation of key legal/policy documents into local languages
- Data collection on violation of children's rights
- Supporting formal education for Orphans and Vulnerable Children (OVCs)
- Provision of scholastic materials, school fees, and basic materials
- Safe schools and child-friendly spaces
- Psychosocial support programs
- Foundational learning programs

**Impact Photos**: Shamira (before/after education), Education subsidy photos, school visit photos

---

### Pillar 2: Community Health & Well-being

**Icon suggestion**: Heart with medical cross / Water droplet + heart

**Encompasses**: Reproductive Health + Water, Sanitation & Hygiene (WASH)

**Description**: We improve public health outcomes by ensuring access to essential reproductive health services and WASH initiatives that provide safe drinking water, proper sanitation, and hygiene practices.

**Activities**:
- Behavioral Change Communication (BCC)
- HIV/AIDS counseling and testing
- Community outreach and school peer health clubs
- Distribution of IEC materials
- Guidance and counseling
- Community-based handwashing promotion
- Water tank provision ("one tank to 10 households" approach)
- Borehole construction (e.g., Butaaya Borehole)
- School and health facility WASH improvement
- Menstrual health and hygiene support in schools
- Construction of sanitation and washing facilities
- Menstrual pad disposal facilities

**Impact Photos**: Borehole launch, water tank installations, Namagembe water tank, Nalongo tank inspection

---

### Pillar 3: Sustainable Livelihoods

**Icon suggestion**: Seedling / Hands with coins

**Encompasses**: Livelihood Support

**Description**: We implement programs that equip vulnerable populations with the skills, resources, and opportunities to generate sustainable income, fostering economic independence and reducing poverty.

**Activities**:
- Vocational skills training for adolescent girls and young women
- Income Generating Activities (IGA) training
- Financial management training
- Provision of basic startup tool kits (e.g., sewing machines)
- Entrepreneurship development
- Agricultural support
- Market linkages
- Poultry/livestock distribution programs

**Impact Photos**: Namanda sewing machine photos, livelihood activities, chicken/poultry distribution

---

### Pillar 4: Household Stability Programs

**Icon suggestion**: House with family / Hands holding a home

**Encompasses**: Emergency Relief + Food Security

**Description**: We actively support households facing food insecurity and shelter challenges, ensuring access to fundamental necessities. Our initiatives include food assistance, temporary shelter solutions, and critical non-food items.

**Activities**:
- Provision of food aid to vulnerable households
- Training in food security
- Agricultural rehabilitation
- Temporary shelter solutions
- Critical non-food items distribution
- Support for children with disabilities (e.g., standing frames)
- Basic needs provision (pampers, essential supplies)

**Impact Photos**: Food relief distribution (Dec 2023), green bags of food supplies, banana/food distribution events, Jovan standing frame, Lynnet supplies

---

### Pillar 5: Environmental Stewardship

**Icon suggestion**: Tree / Globe with leaf

**Encompasses**: Environmental Protection and Conservation

**Description**: We engage communities in sustainable resource management, biodiversity conservation, climate change adaptation, and environmental education.

**Activities**:
- Training of Youth Support Groups
- Formation of Environmental Protection and Conservation Clubs in schools
- Establishing tree nursery (demonstration site)
- Supply of tree seedlings to community
- Tree demonstration garden as learning center
- Climate change adaptation programs
- Community-based conservation initiatives

**Impact Photos**: Tree planting photos (from 2024 collection)

---

## 6. Team & Governance

### Staff Directory

| # | Name | Position | Photo Available |
|---|------|----------|-----------------|
| 1 | Namayengo Madrine | Executive Director / Secretary to Board | Yes (`CEO1 flpped.jpg`, `CEO2.jpg`) |
| 2 | Bulega Francis | Programs Coordinator | Needed |
| 3 | Robert Kabanda | Head Quality Control & Compliance | Needed |
| 4 | Ssebwami Henry | Project Officer | Needed |
| 5 | Namuleme Caroline | Project Assistant | Needed |
| 6 | Nakimera Fatuma | Administrative Assistant | Needed |

### Board of Directors

| # | Position | Name | Profile | Contact |
|---|----------|------|---------|---------|
| 1 | Board Chairperson | TBD | TBD | TBD |
| 2 | Vice Chairperson | TBD | TBD | TBD |
| 3 | Founder Member | TBD | TBD | TBD |
| 4-6 | Board Members | TBD | TBD | TBD |
| 7 | Community Representative | TBD | TBD | TBD |
| 8 | Secretary to the Board | Namayengo Madrine (ED) | Available | Available |

---

## 7. Media & Asset Inventory

### Images

#### Pictorial (2022 Collection)
| File | Subject | Use For |
|------|---------|---------|
| `MRF logo.jpg` | MRF circular logo | Site header, favicon |
| `CEO1 flpped.jpg` | Madrine Namayengo headshot | Team page, ED message |
| `CEO2.jpg` | Madrine Namayengo alternate | Team page |
| `Borehole1.jpeg` / `Borehole3.jpeg` | Borehole construction | WASH program |
| `Launching MRF Community borehole.JPG` | Borehole launch ceremony | Hero, WASH |
| `Wash program - water tank.jpg` / `tank....jpeg` | Family with water tank | WASH program |
| `water tank for mukadde namagembe.jpeg` | Namagembe + tank | Testimonials |
| `tank sticker.jpeg` | MRF branding on tank | WASH program |
| `food items.jpeg` | Food distribution supplies | Household Stability |
| `Jovan before.jpeg` / `Jovan receives standingframe.jpeg` / `jovan foodstuffs.jpeg` | Jovan (disability support) | Testimonials |
| `Shamira ambefore.jpg` / `shamira now receiving formal education.jpg` / `Shamila2.jpeg` | Shamira education story | Testimonials |
| `lynnet.jpeg` / `Lynnet receives pampers etc.jpeg` | Lynnet supply distribution | Testimonials |
| `elizabeth.jpeg` | Elizabeth beneficiary | Testimonials |
| `Namanda sewing machine1.jpeg` / `Namanda sweing machine2.jpeg` / `namanda.jpeg` / `namanda's family.jpeg` | Sewing machine livelihood | Sustainable Livelihoods |
| `mukadde namagembe.jpeg` | Namagembe beneficiary | Testimonials |
| `Masaka NGO Forum surveying some tanks...` (2 files) | NGO Forum tank inspection | Partners, WASH |

#### Pictorial 2023 (Branded Photos)
- **~40+ JPG files** in `MRF PHOTOS WITH LOGO/` subfolder
- All branded with MRF logo watermark
- Cover community events, programs, team activities
- Suitable for: Gallery, program pages, hero images

#### MRF Photos 2024 (Canva Designs)
- **43 PNG files** in `Website update-2024/MRF phots/`
- Canva-designed branded images
- Suitable for: Social media, program highlights, gallery

#### March 2025 Collection
| File | Subject | Use For |
|------|---------|---------|
| `Masaka Relief.jpg` | Updated MRF logo (high-res) | Official branding |
| `Education subsidy T1 2025-*.jpeg/jfif` (3 files) | Education subsidy distribution | Education program |
| `Education subsidy T3 2025-1.jpg` | Education subsidy Term 3 | Education program |
| `WhatsApp Image 2025-03-03 at 6.41.51 PM.jpeg` | Borehole construction work | WASH program |
| `WhatsApp Image 2025-03-03 at 6.43.21 PM.jpeg` | Community food distribution event | Household Stability |
| `WhatsApp Image 2025-03-03 at 6.43.56 PM.jpeg` | Poultry (chicken) distribution | Sustainable Livelihoods |
| `WhatsApp Image 2025-03-03 at 6.44.13 PM.jpeg` | Program activity | General |
| `WhatsApp Image 2025-03-03 at 6.45.09 PM.jpeg` | Program activity | General |
| `WhatsApp Image 2025-03-03 at 6.45.16 PM.jpeg` | Program activity | General |
| `WhatsApp Image 2025-03-03 at 6.45.50 PM.jpeg` | Woman with food (banana) distribution | Household Stability |
| 12 `.heic` files | Various field activities | Need conversion to JPG/WebP |

### Videos

| File | Subject | Duration | Location |
|------|---------|----------|----------|
| `adolescent programs.mp4` | Adolescent empowerment activities | ~8.9MB | Multiple locations |
| `Borehole escarvation at Butaaya.mp4` | Borehole excavation work | ~884KB | Butaaya |
| `Food relief to vulnerable households Dec. 2023.mp4` | Food relief distribution | ~1.2MB | Community |
| `MRF arrives at nakateete.mp4` | MRF team arrival at Nakateete | ~1.7MB | Nakateete |
| `water tank.mp4` | Water tank installation/delivery | ~2.2MB | Community |
| `MRF GGULAMA SEC SCH NAKATEETE.mp4` | MRF at Ggulama Secondary School | In 2023 folder | Nakateete |

### Documents (Downloadable Publications)

| File | Title | Year |
|------|-------|------|
| `Annual report 2021.pdf` | MRF Annual Report 2021 | 2021 |
| `MRF annual report 2022.pdf` | MRF Annual Report 2022 | 2022 |
| `Butaaya Borehole launch 2024_ SITE Briefer and report 2023.pdf` | Butaaya Borehole Launch Report | 2023/2024 |

---

## 8. Content & Copy

### Key Messaging Points

1. **Impact-first language**: Lead with what MRF has achieved, not what problems exist
2. **Community empowerment tone**: Beneficiaries are empowered partners, not passive recipients
3. **Call to action**: Every page should have a clear next step (donate, volunteer, learn more)
4. **Statistics**: Use real numbers wherever possible
5. **Stories**: Personal testimonials humanize the impact

### Suggested Hero Headlines

- "Empowering Communities. Transforming Lives."
- "Considering Assistance and Relief Everywhere"
- "Building Futures in Greater Masaka"
- "Together, We Create Lasting Change"

### CTA Button Text Options

- "Donate Now" / "Support Our Mission"
- "Get Involved" / "Become a Volunteer"
- "Partner With Us"
- "Read Our Stories"
- "Download Report"

---

## 9. Technical Implementation Plan

### Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Structure | HTML5 (semantic) | Accessibility, SEO |
| Styling | CSS3 (custom properties, Flexbox, Grid) | Modern, maintainable |
| Interaction | Vanilla JavaScript (ES6+) | Lightweight, no framework overhead |
| Icons | Font Awesome / Lucide Icons | Comprehensive icon library |
| Fonts | Google Fonts | Free, performant |
| Maps | Leaflet.js or SVG custom map | Interactive district map |
| Gallery | Lightbox library (GLightbox or similar) | Photo/video lightbox |
| Animations | CSS transitions + Intersection Observer API | Scroll animations, counters |
| Forms | HTML5 forms + Formspree/EmailJS | No backend needed |

### Key JavaScript Components

1. **Mobile Navigation**: Hamburger menu with smooth slide
2. **Hero Carousel/Slider**: Auto-rotating hero images
3. **Tab System**: For program pillars and Who We Are tabs
4. **Counter Animation**: Scroll-triggered number counting (Impact section)
5. **Gallery Lightbox**: Click-to-expand photo gallery with categories
6. **Scroll Animations**: Fade-in on scroll for sections
7. **Form Validation**: Contact form client-side validation
8. **Lazy Loading**: Images loaded on scroll for performance
9. **Map Interaction**: Hover/click districts for info

### Build & Optimization

- **Image Processing**: All images converted to WebP format with JPEG fallback
- **HEIC Conversion**: 12 `.heic` files must be converted to WebP/JPEG before use
- **Image Sizes**: Multiple sizes generated (thumbnail, medium, large, original)
- **CSS**: Minified for production
- **JS**: Minified for production
- **Critical CSS**: Inline above-the-fold CSS for fast first paint

---

## 10. Design System & UI/UX

### Layout Principles

- **Max content width**: 1200px centered
- **Grid system**: CSS Grid with 12-column base
- **Section padding**: 80px vertical (desktop), 40px (mobile)
- **Card border-radius**: 12px
- **Button border-radius**: 8px (standard) / 50px (pill buttons)

### Component Library

#### Buttons
```
Primary:   bg-orange, white text, hover darken
Secondary: border-orange, orange text, hover fill
Donate:    bg-red, white text, prominent
Ghost:     transparent, underline on hover
```

#### Cards
```
Program Card:  Icon + Title + Description + Link
Team Card:     Photo + Name + Title + Bio excerpt
Story Card:    Photo + Name + Quote excerpt + "Read More"
Report Card:   PDF icon/thumbnail + Title + Year + Download
Blog Card:     Featured image + Date + Title + Excerpt
```

#### Navigation
```
Desktop: Horizontal top bar, sticky on scroll
Mobile:  Hamburger → full-screen overlay menu
```

### Micro-interactions

- Button hover: Scale 1.02 + shadow
- Card hover: Lift shadow + slight scale
- Link hover: Orange underline slide-in
- Scroll: Fade-up animations for sections
- Counter: Number roll-up on viewport entry
- Gallery: Smooth lightbox open/close

---

## 11. File & Folder Structure

```
MRF_Website/
├── index.html
├── who-we-are.html
├── what-we-do.html
├── publications.html
├── media.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── style.css              (Main stylesheet)
│   │   ├── variables.css          (CSS custom properties / design tokens)
│   │   ├── components.css         (Reusable component styles)
│   │   ├── responsive.css         (Media queries)
│   │   └── animations.css         (Keyframes & transitions)
│   │
│   ├── js/
│   │   ├── main.js                (Core functionality)
│   │   ├── navigation.js          (Mobile nav, sticky header)
│   │   ├── gallery.js             (Photo gallery & lightbox)
│   │   ├── tabs.js                (Tab switching for programs/about)
│   │   ├── counter.js             (Impact stats counter animation)
│   │   ├── carousel.js            (Hero image carousel)
│   │   ├── form.js                (Contact form validation & submission)
│   │   └── map.js                 (Interactive district map)
│   │
│   ├── images/
│   │   ├── logo/
│   │   │   ├── mrf-logo.webp
│   │   │   ├── mrf-logo.png       (Fallback)
│   │   │   └── favicon.ico
│   │   ├── hero/                  (Hero banner images)
│   │   ├── team/                  (Staff headshots)
│   │   ├── programs/              (Program-specific photos)
│   │   │   ├── child-youth/
│   │   │   ├── community-health/
│   │   │   ├── livelihoods/
│   │   │   ├── household-stability/
│   │   │   └── environment/
│   │   ├── gallery/               (Full gallery photos)
│   │   ├── testimonials/          (Success story photos)
│   │   ├── partners/              (Partner logos)
│   │   └── icons/                 (Custom icons if needed)
│   │
│   ├── videos/                    (Self-hosted videos or thumbnails)
│   │
│   ├── documents/                 (Downloadable PDFs)
│   │   ├── annual-report-2021.pdf
│   │   ├── annual-report-2022.pdf
│   │   └── butaaya-borehole-report-2023.pdf
│   │
│   └── fonts/                     (Self-hosted fonts if needed)
│
├── documentation/                 (Original source files - NOT deployed)
│
└── MRF_WEBSITE_COMPREHENSIVE_PLAN.md  (This file)
```

---

## 12. Responsive & Accessibility Requirements

### Breakpoints

| Breakpoint | Width | Target |
|-----------|-------|--------|
| Mobile S | 320px | Small phones |
| Mobile L | 425px | Standard phones |
| Tablet | 768px | Tablets, landscape phones |
| Laptop | 1024px | Small laptops |
| Desktop | 1200px | Standard desktop |
| Large | 1440px+ | Large monitors |

### Accessibility (WCAG 2.1 AA)

- Semantic HTML5 elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`)
- Alt text on ALL images (descriptive for content, empty for decorative)
- Keyboard navigation support (tab order, focus indicators)
- Color contrast ratio minimum 4.5:1 for text
- Skip-to-content link
- ARIA labels for interactive components
- Form labels properly associated with inputs
- Responsive text sizing (rem units)
- Reduced motion support (`prefers-reduced-motion`)
- Screen reader friendly navigation

---

## 13. SEO & Performance

### SEO

- Unique `<title>` tags per page (e.g., "Masaka Relief Foundation | Empowering Communities in Uganda")
- Meta descriptions per page
- Open Graph tags for social sharing
- Structured data (JSON-LD) for Organization schema
- Canonical URLs
- Sitemap.xml
- robots.txt
- Descriptive heading hierarchy (single `<h1>` per page)

### Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Total Blocking Time | < 200ms |
| Cumulative Layout Shift | < 0.1 |
| Page Weight | < 2MB per page |

### Performance Strategies

- WebP images with JPEG fallback (`<picture>` element)
- Lazy loading for below-fold images (`loading="lazy"`)
- Preload critical resources (hero image, fonts)
- Minified CSS and JS
- Gzip/Brotli compression
- Browser caching headers
- Minimal third-party scripts
- Self-hosted fonts with `font-display: swap`

---

## 14. Future Enhancements

### Phase 2 (Post-Launch)

1. **CMS Integration**: Add a headless CMS (e.g., Netlify CMS, Strapi) for blog posts and publications
2. **Online Donation System**: Integrate payment gateway (Stripe, PayPal, or mobile money for Uganda)
3. **Multi-language Support**: English + Luganda (local language)
4. **Volunteer Registration Portal**: Online application form with tracking
5. **Partner Dashboard**: Login area for partners to access reports
6. **Event Calendar**: Upcoming events and program schedules
7. **Impact Tracker**: Real-time project progress tracking
8. **Newsletter System**: Mailchimp/Sendinblue integration for email updates

### Phase 3 (Long-term)

1. **Mobile Money Integration**: MTN Mobile Money / Airtel Money for local donations
2. **Beneficiary Story Database**: Searchable archive of success stories
3. **Annual Report Generator**: Interactive web-based annual reports
4. **Real-time Map Updates**: Live project status on the map
5. **Social Media Feed Integration**: Embedded feeds from Facebook, Twitter, Instagram

---

## Appendix A: Content Checklist (Items Needed from MRF Team)

- [ ] Board of Directors names, photos, and profiles
- [ ] Staff member photos (all except ED)
- [ ] Founder (Marlies Burter) story/biography
- [ ] Exact impact statistics for counter section
- [ ] Current projects needing funding (for "How to Help" section)
- [ ] Partner organization logos (Kolping Lathen, KLJB, Starverner Mujmokers)
- [ ] Social media account URLs
- [ ] Donation/payment information and preferred methods
- [ ] Career/job listings (if any currently open)
- [ ] Permission/consent forms for beneficiary photos/stories
- [ ] Any additional annual reports (2023, 2024)
- [ ] HEIC photos converted to JPEG/WebP format

---

## Appendix B: Success Story Templates

### Template for Each Testimonial

```
Name: [Beneficiary Name]
Location: [Village/District]
Program: [Which of the 5 pillars]
Challenge: [What situation they faced before MRF]
Intervention: [What MRF provided/did]
Outcome: [How their life changed]
Quote: [Direct quote from beneficiary]
Photo(s): [Before/after if available]
```

### Known Stories to Develop

1. **Jovan** — Disability support, received standing frame + food
2. **Shamira** — Education access, went from no school to formal education
3. **Lynnet** — Child welfare, received essential supplies
4. **Namanda** — Livelihood, received sewing machine for income generation
5. **Elizabeth** — Community support beneficiary
6. **Mukadde Namagembe** — WASH program, received water tank
7. **Nalongo** — WASH program, water tank recipient (verified by NGO Forum)
8. **Butaaya Community** — Community borehole impact story

---

*Document prepared from analysis of all MRF documentation files (2022-2025), including website layout documents, site layout edits, MRF website changes proposal, ED message, water tank success stories reference, and all available media assets.*

*Last updated: February 2025*
