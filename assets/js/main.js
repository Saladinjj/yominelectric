/* ═══════════════════════════════════════════════════
   YOMIN ELECTRIC — MAIN.JS  v2.0
   Shared: Nav, Cursor, Scroll Reveal, Dark/Light,
           Language Switcher, WhatsApp/WeChat Float
   ═══════════════════════════════════════════════════ */
'use strict';

/* ─── TRANSLATIONS ─────────────────────────────────── */
const T = {
  en: {
    nav_home:'Home', nav_products:'Products', nav_solutions:'Solutions',
    nav_process:'Process', nav_about:'About', nav_contact:'Contact', nav_cta:'Get Quote',
    ft_desc:'Precision energy metering solutions for global buyers. Trusted in 95+ countries since 2005.',
    ft_copy:'© 2024 Yomin Electric Co., Ltd. All rights reserved.',
    ft_products:'Products', ft_company:'Company', ft_contact_lbl:'Contact',
    about_eyebrow:'Our Story', about_title:'Built on Precision & Trust',
    about_desc:'Since 2005, Yomin Electric has been engineering electrical metering solutions that power homes, businesses, and infrastructure across more than 95 countries worldwide.',
    about_intro_lbl:'Company Introduction', about_intro_h2:'Zhejiang Yomin Electric Co., Ltd.',
    about_intro_p1:'Founded in 2005 and headquartered in Zhejiang Province, Yomin Electric has grown from a local manufacturer into a globally trusted supplier of precision energy metering products.',
    about_intro_p2:'Our 18,000 m² production facility houses state-of-the-art automated assembly lines, a dedicated R&D center, and a comprehensive quality control laboratory.',
    about_intro_p3:'With a team of over 280 engineers and technicians, we serve utility companies, contractors, distributors, and OEM partners across Asia, Africa, Europe, the Middle East, and the Americas.',
    about_cta_contact:'Contact Our Team →', about_cta_products:'Browse Products',
    about_stat1_lbl:'Years Experience', about_stat2_lbl:'Countries Served', about_stat3_lbl:'Team Members', about_stat4_lbl:'Units Shipped',
    about_history_lbl:'Company Timeline', about_history_h2:'Two Decades of Growth', about_history_desc:'From a small workshop to a global exporter.',
    about_tl1_h:'Company Founded', about_tl1_p:'Yomin Electric established in Wenzhou, Zhejiang Province. First production line for single-phase energy meters launched.',
    about_tl2_h:'ISO 9001 Certification', about_tl2_p:'Achieved ISO 9001:2008 quality management certification. Began exporting to Southeast Asia and Middle East markets.',
    about_tl3_h:'CE Certification & European Entry', about_tl3_p:'Obtained CE marking for full product range. First major European distribution contracts signed.',
    about_tl4_h:'New Manufacturing Campus', about_tl4_p:'Moved to an 18,000 m² purpose-built facility with automated assembly lines and expanded quality control center.',
    about_tl5_h:'Smart Gateway Product Line', about_tl5_p:'Launched IoT-enabled smart gateway products for AMR/AMI integration. Partnered with utility companies in 12 new countries.',
    about_tl6_h:'95+ Countries, 12M+ Units', about_tl6_p:'Reached milestones of serving over 95 countries and shipping more than 12 million units.',
    about_factory_lbl:'Our Facility', about_factory_h2:'State-of-the-Art Factory',
    about_factory_desc:'18,000 m² of precision manufacturing, automated assembly, and rigorous quality testing.',
    about_factory1:'Assembly Workshop — 8,000 m²', about_factory2:'Calibration & Testing Lab', about_factory3:'R&D Engineering Center', about_factory4:'Automated Production Line', about_factory5:'Quality Control Station', about_factory6:'Warehousing & Logistics',
    about_markets_lbl:'Global Reach', about_markets_h2:'Trusted in 95+ Countries', about_markets_desc:'Our products power metering infrastructure across every major global region.',
    about_cert_lbl:'Quality Assured', about_cert_h2:'International Certifications', about_cert_desc:'Every product line is tested and certified to meet the strictest international standards.',
    about_cert1_name:'CE Marking', about_cert1_desc:'European Conformity', about_cert2_name:'ISO 9001:2015', about_cert2_desc:'Quality Management System', about_cert3_name:'IEC 62053', about_cert3_desc:'Energy Meter Standard', about_cert4_name:'MID Approved', about_cert4_desc:'EU Measuring Instruments', about_cert5_name:'RoHS Compliant', about_cert5_desc:'Restricted Hazardous Substances', about_cert6_name:'SABS Certified', about_cert6_desc:'South African Bureau of Standards', about_cert7_name:'OIML R46', about_cert7_desc:'International Metrology', about_cert8_name:'CPA Certified', about_cert8_desc:'China Pattern Approval',
    about_values_lbl:'What Drives Us', about_values_h2:'Our Core Values', about_values_desc:'The principles that guide every decision.',
    about_val1_title:'Precision Engineering', about_val1_desc:'Every meter we ship is calibrated, tested, and verified before leaving our facility.',
    about_val2_title:'Global Reliability', about_val2_desc:'Products built for diverse environments — from hot tropical climates to cold northern winters.',
    about_val3_title:'Partnership First', about_val3_desc:'We see every customer as a long-term partner. Technical support and responsive communication are core to how we work.',
    about_val4_title:'Continuous Innovation', about_val4_desc:'Our R&D team invests in next-generation metering technologies — smart grid integration and IoT connectivity.',
    about_val5_title:'Quality Assurance', about_val5_desc:'ISO 9001:2015 certified. Our defect rate is consistently below 0.1% across all product lines.',
    about_val6_title:'Responsible Manufacturing', about_val6_desc:'RoHS compliant materials, energy-efficient production processes, and a commitment to reducing waste.',
    about_cta_lbl:'Ready to Work Together?', about_cta_h2:'Start a Conversation',
    about_cta_desc:'Whether you\'re sourcing for a large utility project or looking for a reliable OEM partner, we\'d love to discuss your requirements.',
    about_cta_btn1:'Get In Touch →', about_cta_btn2:'Explore Products',
    contact_eyebrow:'Get In Touch', contact_title:'Let\'s Talk Business',
    contact_desc:'Whether you need a quote, product specifications, or OEM partnership information — our team responds within 24 hours.',
    contact_form_title:'Send Us a Message', contact_form_sub:'Fill in the details below and we\'ll get back to you promptly.',
    contact_label_name:'Full Name', contact_label_email:'Email Address', contact_label_company:'Company / Organization', contact_label_country:'Country', contact_label_subject:'Subject', contact_label_message:'Message',
    contact_placeholder_name:'John Smith', contact_placeholder_email:'john@company.com', contact_placeholder_company:'Your Company Ltd.',
    contact_select_country:'Select your country', contact_select_topic:'Select a topic',
    contact_opt1:'Product Inquiry', contact_opt2:'Quote Request', contact_opt3:'OEM / ODM Partnership', contact_opt4:'Technical Support', contact_opt5:'Certifications / Documentation', contact_opt6:'Shipping & Logistics', contact_opt7:'Other',
    contact_placeholder_msg:'Please describe your requirements, quantities, target market, or any questions you have…',
    contact_submit:'Send Message', contact_success_title:'Message Sent!', contact_success_desc:'Thank you for reaching out. Our sales team will respond within one business day.', contact_success_btn:'Browse Products →',
    contact_info_lbl:'Direct Contact', contact_info_h2:'We\'re Here to Help', contact_info_desc:'Our international sales team works with buyers across different time zones and languages.',
    contact_email_lbl:'Email', contact_wa_lbl:'WhatsApp', contact_addr_lbl:'Address', contact_addr_val:'No. 88 Industrial Avenue, Wenzhou, Zhejiang Province, China, 325000',
    contact_store_lbl:'Online Stores', contact_hours_title:'Business Hours (CST UTC+8)',
    contact_hours_mf:'Monday – Friday', contact_hours_sat:'Saturday', contact_hours_sun:'Sunday', contact_hours_closed:'Closed',
    process_eyebrow:'From Design to Delivery', process_title:'How We Build Every Product', process_desc:'Our manufacturing process combines rigorous engineering, automated production, and comprehensive quality control to deliver products that meet the most demanding international standards — every time.',
    process_steps_lbl:'Step by Step', process_steps_h2:'Our Manufacturing Process', process_steps_desc:'From the moment we receive your inquiry to the moment products arrive at your facility — here\'s exactly how we work.',
    process_s1_num:'Step 01', process_s1_title:'Research & Development', process_s1_desc:'Our R&D center employs 40+ engineers working on product design, firmware development, and standards compliance. New products undergo 12–18 months of development including prototype testing, environmental simulation, and pre-certification testing before entering production. We continuously update product lines to meet evolving IEC, ANSI, and regional utility standards.',
    process_s1_d1:'40+ R&D Engineers', process_s1_d2:'IEC/ANSI Compliance Testing', process_s1_d3:'Firmware Development', process_s1_d4:'Environmental Simulation', process_s1_d5:'12–18 Month Cycle',
    process_s2_num:'Step 02', process_s2_title:'Raw Material Sourcing & Incoming Inspection', process_s2_desc:'All raw materials — PCB components, current transformers, enclosures, terminals, and displays — are sourced from certified suppliers and subject to incoming quality inspection (IQI). Every batch of components is checked against our acceptance criteria before entering production. Critical components are tested for electrical performance, dimensional accuracy, and material certification compliance.',
    process_s2_d1:'Certified Suppliers Only', process_s2_d2:'Incoming Quality Inspection', process_s2_d3:'Component-Level Testing', process_s2_d4:'Material Certification', process_s2_d5:'ISO 9001:2015 Controlled',
    process_s3_num:'Step 03', process_s3_title:'PCB Assembly & SMT Production', process_s3_desc:'Our 18,000 m² facility houses 6 automated SMT (Surface Mount Technology) production lines capable of producing 2 million PCB assemblies per month. Lead-free solder paste, automated optical inspection (AOI), and X-ray inspection ensure every circuit board meets our quality standards before moving to final assembly.',
    process_s3_d1:'6 SMT Lines', process_s3_d2:'2M PCBs/Month Capacity', process_s3_d3:'Lead-Free Solder', process_s3_d4:'AOI Inspection', process_s3_d5:'X-Ray Inspection', process_s3_d6:'RoHS Compliant',
    process_s4_num:'Step 04', process_s4_title:'Final Assembly & Firmware Programming', process_s4_desc:'Final assembly integrates the PCB, current sensing elements, displays, enclosures, and terminals. Each unit has firmware loaded and programmed with customer-specific parameters including meter constant, communication address, tariff settings, and display language. Our assembly staff follow standardised work instructions with torque specifications and wiring verification at every step.',
    process_s4_d1:'Firmware Programming', process_s4_d2:'Customer Parameter Setting', process_s4_d3:'Torque-Controlled Assembly', process_s4_d4:'Wiring Verification', process_s4_d5:'Label & Marking',
    process_s5_num:'Step 05', process_s5_title:'Calibration & Accuracy Verification', process_s5_desc:'Every energy meter is calibrated on our 3-phase energy meter calibration benches traceable to NIST and PTB national standards. Meters are tested at multiple load points (1%, 5%, 25%, 100% Imax) to verify error remains within the declared accuracy class. Current transformers are ratio and phase error tested to IEC 61869 on precision CT test benches. Calibration records are retained for full traceability.',
    process_s5_d1:'NIST/PTB Traceable', process_s5_d2:'Multi-Load Calibration', process_s5_d3:'100% Unit Testing', process_s5_d4:'IEC 62053 Verification', process_s5_d5:'Digital Records', process_s5_d6:'CT Ratio & Phase Testing',
    process_s6_num:'Step 06', process_s6_title:'Quality Control & Environmental Testing', process_s6_desc:'After calibration, units undergo final quality control inspection including visual inspection, sealing, terminal cover fitting, and packaging verification. Products for export markets undergo additional environmental tests: temperature cycling (-25°C to +55°C), humidity testing (95% RH), vibration, and impulse voltage testing per IEC 60068. We maintain a defect rate below 0.1% across all product lines.',
    process_s6_d1:'Visual & Dimensional', process_s6_d2:'Temperature Cycle Testing', process_s6_d3:'Humidity Testing', process_s6_d4:'Impulse Voltage 6kV', process_s6_d5:'Vibration Testing', process_s6_d6:'<0.1% Defect Rate',
    process_s7_num:'Step 07', process_s7_title:'Packaging, Certification & Shipping', process_s7_desc:'Approved units are packed in export-grade cartons with inner foam protection, accompanied by user manuals, test certificates, and compliance documentation. We coordinate shipping via Shanghai and Ningbo ports (45 min drive), handling FCL, LCL, air freight, and express courier services. Full documentation package: commercial invoice, packing list, certificate of origin (CO), CE declaration, and test reports provided for every shipment.',
    process_s7_d1:'Export Carton Packing', process_s7_d2:'Test Certificates Included', process_s7_d3:'Shanghai / Ningbo Port', process_s7_d4:'FCL & LCL', process_s7_d5:'CO & CE Documents', process_s7_d6:'DHL / FedEx Express',
    process_s8_num:'Step 08', process_s8_title:'After-Sales Technical Support', process_s8_desc:'Our relationship doesn\'t end at delivery. We provide technical support for installation, commissioning, and integration. English-language user manuals, wiring diagrams, and software tools provided for all products. Firmware updates, replacement parts, and technical assistance available for the full product lifecycle. Our engineering team can assist with utility integration, head-end system configuration, and custom firmware requirements.',
    process_s8_d1:'Installation Support', process_s8_d2:'English Documentation', process_s8_d3:'Firmware Updates', process_s8_d4:'Integration Assistance', process_s8_d5:'Lifecycle Support', process_s8_d6:'WhatsApp / Email',
    process_qc_lbl:'Quality Control', process_qc_h2:'Zero Compromise on Quality', process_qc_desc:'Our quality control process is integrated at every stage.',
    process_qc1_title:'Incoming Inspection', process_qc1_desc:'All incoming components are inspected before production approval.',
    process_qc2_title:'In-Process Monitoring', process_qc2_desc:'AOI and SPC monitor assembly quality in real time.',
    process_qc3_title:'Final Testing', process_qc3_desc:'100% of finished units undergo full electrical testing.',
    process_qc4_title:'Environmental Testing', process_qc4_desc:'Samples from each batch are subjected to temperature, humidity, and vibration testing.',
    process_qc5_title:'Accuracy Verification', process_qc5_desc:'Our reference standards are calibrated to OIML-traceable national metrology institutes.',
    process_qc6_title:'Traceability & Records', process_qc6_desc:'Every unit is assigned a serial number linked to its production batch and test results.',
    process_lead_lbl:'Lead Times', process_lead_h2:'Realistic Timelines You Can Plan Around', process_lead_desc:'Here\'s what to expect from order confirmation to delivery.',
    process_lead1_num:'7–15', process_lead1_unit:'Days', process_lead1_lbl:'Sample Production',
    process_lead2_num:'25–35', process_lead2_unit:'Days', process_lead2_lbl:'Standard Production Order',
    process_lead3_num:'3–5', process_lead3_unit:'Days', process_lead3_lbl:'Express Air Shipping',
    process_lead4_num:'20–30', process_lead4_unit:'Days', process_lead4_lbl:'Sea Freight (Asia-Europe)',
    process_cta_lbl:'Start Your Order', process_cta_h2:'Request a Sample or Quote', process_cta_desc:'Let our team guide you through the sourcing process.',
    process_cta_btn1:'Request a Quote →', process_cta_btn2:'Browse Products',
    sol_eyebrow:'What We Solve', sol_title:'Solutions for Every Metering Challenge',
    sol_desc:'From residential billing to industrial monitoring — Yomin Electric has the product range and expertise to deliver.',
    sol_grid_lbl:'Solution Areas', sol_grid_h2:'Tailored for Your Application', sol_grid_desc:'Products and technical documentation for major application areas.',
    sol1_title:'Residential Energy Metering', sol1_desc:'Single-phase and three-phase meters for billing, submetering, and prepaid systems.', sol1_link:'See Residential Products →',
    sol2_title:'Commercial & Industrial Metering', sol2_desc:'High-accuracy multi-function meters with RS485, Modbus RTU, and M-Bus for SCADA.', sol2_link:'See Industrial Products →',
    sol3_title:'Prepaid & Smart Payment Systems', sol3_desc:'Keypad token meters, IC card meters, and STS-compliant prepaid systems.', sol3_link:'See Prepaid Meters →',
    sol4_title:'AMR / AMI Infrastructure', sol4_desc:'Data concentrators, smart gateways, PLC communication meters, and Zigbee mesh solutions.', sol4_link:'See Smart Gateway Products →',
    sol5_title:'Current & Voltage Measurement', sol5_desc:'Current transformers, voltage transformers, and protection relays for metering panels.', sol5_link:'See Transformers & Protectors →',
    sol6_title:'OEM & Custom Solutions', sol6_desc:'Custom firmware, labeling, branding, and hardware modifications for OEM customers.', sol6_link:'Discuss OEM Partnership →',
    sol_ind_lbl:'Industries Served', sol_ind_h2:'Built for Many Sectors', sol_ind_desc:'Our products are deployed across a wide range of industries worldwide.',
    sol_ind1_name:'Electric Utilities', sol_ind1_desc:'National and regional power distribution companies',
    sol_ind2_name:'Real Estate', sol_ind2_desc:'Submetering for apartment and commercial complexes',
    sol_ind3_name:'Industrial', sol_ind3_desc:'Factories, plants, and industrial monitoring systems',
    sol_ind4_name:'Government', sol_ind4_desc:'Public infrastructure and municipal utilities',
    sol_ind5_name:'Smart Cities', sol_ind5_desc:'IoT-enabled metering for urban infrastructure',
    sol_ind6_name:'Telecom', sol_ind6_desc:'Power monitoring for towers and data centers',
    sol_ind7_name:'Agriculture', sol_ind7_desc:'Irrigation pumping stations and rural electrification',
    sol_ind8_name:'Renewables', sol_ind8_desc:'Solar PV output monitoring and grid-tie metering',
    sol_tech_lbl:'Technical Capabilities', sol_tech_h2:'What Our Products Support', sol_tech_desc:'Core technical features available across our product range.',
    sol_tech1_title:'Multi-Protocol Communication', sol_tech1_desc:'RS485 Modbus RTU, DL/T645, M-Bus, NB-IoT, Zigbee, PLC, and 4G/LTE options.',
    sol_tech2_title:'Accuracy Class 0.2–1', sol_tech2_desc:'From Class 1 residential billing meters to Class 0.2 high-precision reference meters.',
    sol_tech3_title:'Wide Voltage Range', sol_tech3_desc:'Products rated for 100–240V AC single-phase and 3×220/380V three-phase systems.',
    sol_tech4_title:'Prepaid & STS Compliant', sol_tech4_desc:'IEC 62055-41 compliant prepaid systems, compatible with all major utility platforms.',
    sol_tech5_title:'Tamper Detection', sol_tech5_desc:'Magnetic field detection, terminal cover tamper, reversed current detection.',
    sol_tech6_title:'DIN Rail & Panel Mount', sol_tech6_desc:'Products available in DIN rail (35mm), panel mount, socket-type, and custom formats.',
    sol_cta_lbl:'Find Your Solution', sol_cta_h2:'Not Sure Which Product Fits?',
    sol_cta_desc:'Our technical sales team can help you identify the right product configuration.',
    sol_cta_btn1:'Contact Technical Sales →', sol_cta_btn2:'Download Product Catalog',
    prod_browse_cat:'Browse by Category', prod_search:'Search products…', prod_all:'All Products',
    prod_sort:'Sort', prod_default:'Default', prod_price_asc:'Price: Low to High',
    prod_price_desc:'Price: High to Low', prod_az:'Name: A–Z', prod_za:'Name: Z–A',
    prod_load_more:'Load More', prod_no_results:'No products found',
    prod_desc:'Browse our complete range of energy meters, voltage stabilizers, current transformers, and accessories. CE certified. Trusted by buyers in 95+ countries.',
    prod_cat_energy_meter:'Energy Meters', prod_cat_voltage_stabilizer:'Voltage Stabilizers', prod_cat_current_transformer:'Current Transformers', prod_cat_variac:'Variac / Transformers', prod_cat_terminal:'Terminals & Connectors', prod_cat_solar:'Solar & PV', prod_cat_fuse:'Fuses & Protection', prod_cat_voltage_protector:'Voltage Protectors', prod_cat_socket:'Sockets & Wiring', prod_cat_tile:'Tile Leveling', prod_cat_tools:'Tools & Hardware', prod_cat_seal:'Security Seals', prod_cat_other:'Other Products',
    bundle_package_options:'Package Options', bundle_quantity_pricing:'Quantity‑Based Pricing', bundle_select:'Select', bundle_selected:'Selected', bundle_recommended:'Recommended', bundle_number_of_sets:'Number of Sets',
  },
  fr: {
    nav_home:'Accueil', nav_products:'Produits', nav_solutions:'Solutions',
    nav_process:'Processus', nav_about:'À Propos', nav_contact:'Contact', nav_cta:'Devis',
    ft_desc:'Solutions de comptage d\'énergie de précision. Présents dans plus de 95 pays depuis 2005.',
    ft_copy:'© 2024 Yomin Electric Co., Ltd. Tous droits réservés.',
    ft_products:'Produits', ft_company:'Entreprise', ft_contact_lbl:'Contact',
    about_eyebrow:'Notre Histoire', about_title:'Fondés sur la Précision et la Confiance',
    about_desc:'Depuis 2005, Yomin Electric conçoit des solutions de comptage dans plus de 95 pays.',
    about_intro_lbl:'Présentation', about_intro_h2:'Zhejiang Yomin Electric Co., Ltd.',
    about_intro_p1:'Fondée en 2005 dans le Zhejiang, Yomin Electric est devenue un fournisseur mondial de confiance.',
    about_intro_p2:'Notre usine de 18 000 m² dispose de lignes automatisées, d\'un centre R&D et d\'un laboratoire qualité.',
    about_intro_p3:'280+ ingénieurs et techniciens au service de clients sur 5 continents.',
    about_cta_contact:'Contacter Notre Équipe →', about_cta_products:'Voir les Produits',
    about_stat1_lbl:'Années d\'Expérience', about_stat2_lbl:'Pays Desservis', about_stat3_lbl:'Membres de l\'Équipe', about_stat4_lbl:'Unités Expédiées',
    about_history_lbl:'Chronologie', about_history_h2:'Deux Décennies de Croissance', about_history_desc:'D\'un petit atelier à un exportateur mondial.',
    about_tl1_h:'Fondation', about_tl1_p:'Yomin Electric créée à Wenzhou, Zhejiang. Première ligne de production lancée.',
    about_tl2_h:'Certification ISO 9001', about_tl2_p:'ISO 9001:2008 obtenue. Début des exportations vers l\'Asie et le Moyen-Orient.',
    about_tl3_h:'Marquage CE & Europe', about_tl3_p:'Marquage CE pour toute la gamme. Premiers contrats européens.',
    about_tl4_h:'Nouveau Campus', about_tl4_p:'Usine de 18 000 m² avec lignes automatisées.',
    about_tl5_h:'Passerelles Intelligentes', about_tl5_p:'Lancement IoT pour AMR/AMI. 12 nouveaux pays.',
    about_tl6_h:'95+ Pays, 12M+ Unités', about_tl6_p:'Cap de 95 pays et 12 millions d\'unités.',
    about_factory_lbl:'Notre Usine', about_factory_h2:'Usine d\'Excellence',
    about_factory_desc:'18 000 m² de fabrication de précision et contrôle qualité.',
    about_factory1:'Atelier d\'Assemblage — 8 000 m²', about_factory2:'Laboratoire de Calibration', about_factory3:'Centre R&D', about_factory4:'Production Automatisée', about_factory5:'Contrôle Qualité', about_factory6:'Logistique',
    about_markets_lbl:'Portée Mondiale', about_markets_h2:'Présents dans 95+ Pays', about_markets_desc:'Nos produits alimentent les infrastructures mondiales.',
    about_cert_lbl:'Qualité Certifiée', about_cert_h2:'Certifications Internationales', about_cert_desc:'Chaque gamme est testée selon les normes internationales.',
    about_cert1_name:'Marquage CE', about_cert1_desc:'Conformité Européenne', about_cert2_name:'ISO 9001:2015', about_cert2_desc:'Management Qualité', about_cert3_name:'IEC 62053', about_cert3_desc:'Norme Compteurs', about_cert4_name:'Approuvé MID', about_cert4_desc:'Instruments UE', about_cert5_name:'Conforme RoHS', about_cert5_desc:'Substances Dangereuses', about_cert6_name:'Certifié SABS', about_cert6_desc:'Normes Afrique du Sud', about_cert7_name:'OIML R46', about_cert7_desc:'Métrologie Int.', about_cert8_name:'Certifié CPA', about_cert8_desc:'Approbation Chine',
    about_values_lbl:'Nos Valeurs', about_values_h2:'Valeurs Fondamentales', about_values_desc:'Les principes qui guident chaque décision.',
    about_val1_title:'Ingénierie de Précision', about_val1_desc:'Chaque compteur est calibré et vérifié avant expédition.',
    about_val2_title:'Fiabilité Mondiale', about_val2_desc:'Produits pour environnements variés, des tropiques aux hivers nordiques.',
    about_val3_title:'Partenariat Avant Tout', about_val3_desc:'Chaque client est un partenaire à long terme.',
    about_val4_title:'Innovation Continue', about_val4_desc:'R&D en technologies de comptage nouvelle génération.',
    about_val5_title:'Assurance Qualité', about_val5_desc:'ISO 9001:2015. Taux de défauts inférieur à 0,1%.',
    about_val6_title:'Fabrication Responsable', about_val6_desc:'Matériaux RoHS et procédés économes en énergie.',
    about_cta_lbl:'Prêt à Travailler Ensemble ?', about_cta_h2:'Démarrons une Conversation',
    about_cta_desc:'Que vous sourciez pour un projet ou cherchiez un partenaire OEM.',
    about_cta_btn1:'Prendre Contact →', about_cta_btn2:'Explorer les Produits',
    contact_eyebrow:'Nous Contacter', contact_title:'Parlons Affaires',
    contact_desc:'Notre équipe répond sous 24 heures à vos demandes de devis ou d\'informations.',
    contact_form_title:'Envoyez-Nous un Message', contact_form_sub:'Remplissez les informations et nous vous répondrons rapidement.',
    contact_label_name:'Nom Complet', contact_label_email:'Adresse Email', contact_label_company:'Entreprise', contact_label_country:'Pays', contact_label_subject:'Sujet', contact_label_message:'Message',
    contact_placeholder_name:'Jean Dupont', contact_placeholder_email:'jean@entreprise.com', contact_placeholder_company:'Votre Société',
    contact_select_country:'Sélectionnez votre pays', contact_select_topic:'Sélectionnez un sujet',
    contact_opt1:'Demande de Produit', contact_opt2:'Demande de Devis', contact_opt3:'Partenariat OEM', contact_opt4:'Support Technique', contact_opt5:'Certifications', contact_opt6:'Expédition', contact_opt7:'Autre',
    contact_placeholder_msg:'Décrivez vos besoins, quantités, marché cible…',
    contact_submit:'Envoyer', contact_success_title:'Message Envoyé !', contact_success_desc:'Merci. Notre équipe répondra sous un jour ouvrable.', contact_success_btn:'Voir les Produits →',
    contact_info_lbl:'Contact Direct', contact_info_h2:'Nous Sommes Là', contact_info_desc:'Notre équipe parle anglais, chinois et peut coordonner avec des partenaires arabophones.',
    contact_email_lbl:'Email', contact_wa_lbl:'WhatsApp', contact_addr_lbl:'Adresse', contact_addr_val:'No. 88 Avenue Industrielle, Wenzhou, Zhejiang, Chine',
    contact_store_lbl:'Boutiques en Ligne', contact_hours_title:'Horaires (CST UTC+8)',
    contact_hours_mf:'Lundi – Vendredi', contact_hours_sat:'Samedi', contact_hours_sun:'Dimanche', contact_hours_closed:'Fermé',
    process_eyebrow:'Notre Fonctionnement', process_title:'De la Conception à la Livraison', process_desc:'Chaque produit suit un processus rigoureux de fabrication.',
    process_steps_lbl:'Notre Processus', process_steps_h2:'Six Étapes Vers l\'Excellence', process_steps_desc:'Un processus affiné sur 19 ans de production.',
    process_s1_num:'Étape 01', process_s1_title:'R&D', process_s1_desc:'Conception basée sur les exigences du marché et les retours clients.',
    process_s2_num:'Étape 02', process_s2_title:'Approvisionnement', process_s2_desc:'Composants de fournisseurs agréés, testés à la réception.',
    process_s3_num:'Étape 03', process_s3_title:'Assemblage Automatisé', process_s3_desc:'500 000 unités/mois sur lignes SMT modernes.',
    process_s4_num:'Étape 04', process_s4_title:'Calibration & Tests', process_s4_desc:'Calibration individuelle de chaque unité.',
    process_s5_num:'Étape 05', process_s5_title:'Certification', process_s5_desc:'IEC, CE, OIML, MID, SABS et exigences régionales.',
    process_s6_num:'Étape 06', process_s6_title:'Contrôle Qualité & Tests Environnementaux', process_s6_desc:'Après calibration, les unités subissent un contrôle qualité final incluant inspection visuelle, scellement, installation du couvercle de bornes et vérification de l\'emballage. Les produits pour les marchés d\'exportation subissent des tests environnementaux supplémentaires : cyclage thermique (-25°C à +55°C), test d\'humidité (95% HR), vibration et test de tension d\'impulsion selon IEC 60068. Nous maintenons un taux de défauts inférieur à 0,1% sur toutes les gammes.',
    process_s6_d1:'Contrôle Visuel', process_s6_d2:'Test Cyclage Thermique', process_s6_d3:'Test Humidité', process_s6_d4:'Tension Impulsion 6kV', process_s6_d5:'Test Vibrations', process_s6_d6:'Taux Défauts <0,1%',
    process_s7_num:'Étape 07', process_s7_title:'Emballage, Certification & Expédition', process_s7_desc:'Les unités approuvées sont emballées dans des cartons d\'export avec protection mousse intérieure, accompagnées de manuels utilisateur, certificats de test et documentation de conformité. Nous coordonnons l\'expédition via les ports de Shanghai et Ningbo (45 min en voiture), en gérant FCL, LCL, fret aérien et services de messagerie express. Documentation complète : facture commerciale, liste de colisage, certificat d\'origine (CO), déclaration CE et rapports de test fournis pour chaque expédition.',
    process_s7_d1:'Cartons Export', process_s7_d2:'Certificats Inclus', process_s7_d3:'Port Shanghai/Ningbo', process_s7_d4:'FCL & LCL', process_s7_d5:'Documents CO & CE', process_s7_d6:'DHL / FedEx Express',
    process_s8_num:'Étape 08', process_s8_title:'Support Technique Après-Vente', process_s8_desc:'Notre relation ne s\'arrête pas à la livraison. Nous fournissons un support technique pour l\'installation, la mise en service et l\'intégration. Manuels utilisateur en anglais, schémas de câblage et outils logiciels fournis pour tous les produits. Mises à jour firmware, pièces de rechange et assistance technique disponibles pour toute la durée de vie du produit. Notre équipe d\'ingénieurs peut aider à l\'intégration avec les utilities, la configuration du système central et les besoins de firmware personnalisé.',
    process_s8_d1:'Support Installation', process_s8_d2:'Documentation Anglaise', process_s8_d3:'Mises à Jour Firmware', process_s8_d4:'Assistance Intégration', process_s8_d5:'Support Cycle de Vie', process_s8_d6:'WhatsApp / Email',
    process_qc_lbl:'Contrôle Qualité', process_qc_h2:'Zéro Compromis', process_qc_desc:'Contrôle qualité intégré à chaque étape.',
    process_qc1_title:'Certifié ISO 9001:2015', process_qc1_desc:'Système de management qualité complet certifié ISO 9001:2015 couvrant la conception, l\'approvisionnement, la production, les tests et le service après-vente. Audité annuellement par des organismes de certification tiers.',
    process_qc2_title:'Test 100% des Unités', process_qc2_desc:'Chaque unité individuelle — pas seulement des échantillons — subit un étalonnage individuel et des tests fonctionnels avant l\'emballage. Aucune expédition ne part sans un certificat de test complet pour chaque lot.',
    process_qc3_title:'Lab Simulation Environnementale', process_qc3_desc:'Chambres climatiques capables de -40°C à +85°C, cycles d\'humidité 95% HR, et exposition UV simulent 10 ans de conditions réelles d\'exploitation pendant les tests de qualification des produits.',
    process_qc4_title:'Test Haute Tension & Surtension', process_qc4_desc:'Tests de tension d\'impulsion 6kV et diélectrique AC 4kV selon IEC 60068 garantissent que les compteurs résistent aux surtensions de foudre et transitoires réseau sans défaillance ni danger.',
    process_qc5_title:'Traçabilité Précision', process_qc5_desc:'Tout l\'équipement d\'étalonnage est traçable aux standards nationaux PTB (Allemagne) et NIST (USA). Certificats d\'étalonnage et incertitude de mesure documentés pour chaque banc de test.',
    process_qc6_title:'Contrôle Statistique Processus', process_qc6_desc:'Graphiques SPC et suivi des défauts sur toutes les lignes de production permettent l\'amélioration continue. Taux de défauts actuel maintenu sous 0,1% avec suivi RMA pour tous les produits retournés.',
    process_lead_lbl:'Délais', process_lead_h2:'Délais Réalistes', process_lead_desc:'De la confirmation à la livraison.',
    process_lead1_num:'7–15', process_lead1_unit:'Jours', process_lead1_lbl:'Échantillons',
    process_lead2_num:'25–35', process_lead2_unit:'Jours', process_lead2_lbl:'Commande Standard',
    process_lead3_num:'3–5', process_lead3_unit:'Jours', process_lead3_lbl:'Expédition Aérienne',
    process_lead4_num:'20–30', process_lead4_unit:'Jours', process_lead4_lbl:'Fret Maritime',
    process_cta_lbl:'Commencer', process_cta_h2:'Demandez un Échantillon', process_cta_desc:'Notre équipe vous guide du choix à la livraison.',
    process_cta_btn1:'Demander un Devis →', process_cta_btn2:'Voir les Produits',
    sol_eyebrow:'Nos Solutions', sol_title:'Pour Chaque Défi de Comptage',
    sol_desc:'Du résidentiel à l\'industriel — Yomin Electric livre.',
    sol_grid_lbl:'Domaines', sol_grid_h2:'Adaptées à Votre Application', sol_grid_desc:'Produits et documentation technique.',
    sol1_title:'Comptage Résidentiel', sol1_desc:'Compteurs mono et triphasés pour facturation et prépayé.', sol1_link:'Voir Produits →',
    sol2_title:'Comptage Industriel', sol2_desc:'Compteurs haute précision avec RS485 et Modbus pour SCADA.', sol2_link:'Voir Produits →',
    sol3_title:'Systèmes Prépayés', sol3_desc:'Clavier, carte IC et systèmes STS pour protection des recettes.', sol3_link:'Voir Prépayés →',
    sol4_title:'Infrastructure AMR/AMI', sol4_desc:'Concentrateurs, passerelles et compteurs CPL.', sol4_link:'Voir Passerelles →',
    sol5_title:'Mesure Courant & Tension', sol5_desc:'Transformateurs et relais pour tableaux et sous-stations.', sol5_link:'Voir Transformateurs →',
    sol6_title:'Solutions OEM', sol6_desc:'Firmware, marquage et modifications personnalisés.', sol6_link:'Partenariat OEM →',
    sol_ind_lbl:'Secteurs', sol_ind_h2:'Conçus pour Nombreux Secteurs', sol_ind_desc:'Déployés dans de nombreux secteurs.',
    sol_ind1_name:'Utilities Électriques', sol_ind1_desc:'Distribution nationale et régionale',
    sol_ind2_name:'Immobilier', sol_ind2_desc:'Sous-comptage résidentiel et commercial',
    sol_ind3_name:'Industrie', sol_ind3_desc:'Usines et surveillance industrielle',
    sol_ind4_name:'Gouvernement', sol_ind4_desc:'Infrastructures publiques',
    sol_ind5_name:'Villes Intelligentes', sol_ind5_desc:'Comptage IoT urbain',
    sol_ind6_name:'Télécommunications', sol_ind6_desc:'Surveillance antennes et datacenters',
    sol_ind7_name:'Agriculture', sol_ind7_desc:'Pompage et électrification rurale',
    sol_ind8_name:'Renouvelables', sol_ind8_desc:'Monitoring solaire et réseau',
    sol_tech_lbl:'Capacités Techniques', sol_tech_h2:'Ce Que Nos Produits Supportent', sol_tech_desc:'Fonctionnalités principales.',
    sol_tech1_title:'Multi-Protocoles', sol_tech1_desc:'RS485, M-Bus, NB-IoT, Zigbee, PLC, 4G.',
    sol_tech2_title:'Classe 0,2–1', sol_tech2_desc:'Du résidentiel au haute précision.',
    sol_tech3_title:'Large Plage Tension', sol_tech3_desc:'100–240V et triphasé pour normes mondiales.',
    sol_tech4_title:'Conforme STS', sol_tech4_desc:'IEC 62055-41 pour plateformes utility.',
    sol_tech5_title:'Anti-Falsification', sol_tech5_desc:'Détection magnétique et journalisation.',
    sol_tech6_title:'Rail DIN & Tableau', sol_tech6_desc:'DIN 35mm, panneau, prise, boîtiers.',
    sol_cta_lbl:'Votre Solution', sol_cta_h2:'Pas Sûr du Produit ?',
    sol_cta_desc:'Notre équipe identifie la configuration adaptée.',
    sol_cta_btn1:'Contacter les Ventes →', sol_cta_btn2:'Télécharger Catalogue',
    prod_browse_cat:'Parcourir par Catégorie', prod_search:'Rechercher…', prod_all:'Tous les Produits',
    prod_sort:'Trier', prod_default:'Par défaut', prod_price_asc:'Prix: Croissant',
    prod_price_desc:'Prix: Décroissant', prod_az:'Nom: A–Z', prod_za:'Nom: Z–A',
    prod_load_more:'Charger Plus', prod_no_results:'Aucun produit trouvé',
    prod_desc:'Parcourez notre gamme complète de compteurs d\'énergie, stabilisateurs de tension, transformateurs de courant et accessoires. Certifié CE. Présents dans plus de 95 pays.',
    prod_cat_energy_meter:'Compteurs d\'Énergie', prod_cat_voltage_stabilizer:'Stabilisateurs de Tension', prod_cat_current_transformer:'Transformateurs de Courant', prod_cat_variac:'Variacs / Transformateurs', prod_cat_terminal:'Bornes & Connecteurs', prod_cat_solar:'Solaire & PV', prod_cat_fuse:'Fusibles & Protection', prod_cat_voltage_protector:'Protecteurs de Tension', prod_cat_socket:'Prises & Câblage', prod_cat_tile:'Nivellement Carrelage', prod_cat_tools:'Outils & Quincaillerie', prod_cat_seal:'Scellés de Sécurité', prod_cat_other:'Autres Produits',
  },
  ar: {
    nav_home:'الرئيسية', nav_products:'المنتجات', nav_solutions:'الحلول',
    nav_process:'العملية', nav_about:'عن الشركة', nav_contact:'اتصل بنا', nav_cta:'طلب عرض سعر',
    ft_desc:'حلول قياس الطاقة الدقيقة. موثوق به في أكثر من 95 دولة منذ 2005.',
    ft_copy:'© 2024 يومين إلكتريك. جميع الحقوق محفوظة.',
    ft_products:'المنتجات', ft_company:'الشركة', ft_contact_lbl:'التواصل',
    about_eyebrow:'قصتنا', about_title:'مبنيون على الدقة والثقة',
    about_desc:'منذ 2005، نصمم حلول قياس الطاقة لأكثر من 95 دولة.',
    about_intro_lbl:'نبذة عن الشركة', about_intro_h2:'شركة يومين إلكتريك',
    about_intro_p1:'تأسست 2005 في تشيجيانغ، ونمت إلى مورد عالمي موثوق.',
    about_intro_p2:'مصنع 18,000 م² بخطوط آلية ومختبر R&D ومراقبة جودة.',
    about_intro_p3:'280+ مهندساً يخدمون عملاء في 5 قارات.',
    about_cta_contact:'تواصل معنا →', about_cta_products:'تصفح المنتجات',
    about_stat1_lbl:'سنة خبرة', about_stat2_lbl:'دولة', about_stat3_lbl:'عضو فريق', about_stat4_lbl:'وحدة مشحونة',
    about_history_lbl:'التاريخ', about_history_h2:'عقدان من النمو', about_history_desc:'من ورشة صغيرة إلى مصدّر عالمي.',
    about_tl1_h:'التأسيس', about_tl1_p:'تأسست في وينتشو وإطلاق أول خط إنتاج.',
    about_tl2_h:'ISO 9001', about_tl2_p:'شهادة ISO 9001:2008 وتصدير لآسيا والشرق الأوسط.',
    about_tl3_h:'علامة CE وأوروبا', about_tl3_p:'علامة CE وعقود أوروبية.',
    about_tl4_h:'حرم تصنيع جديد', about_tl4_p:'مصنع 18,000 م² بمعدات متطورة.',
    about_tl5_h:'البوابات الذكية', about_tl5_p:'IoT لـ AMR/AMI وشراكات في 12 دولة.',
    about_tl6_h:'+95 دولة، +12 مليون', about_tl6_p:'إنجاز 95+ دولة و12+ مليون وحدة.',
    about_factory_lbl:'منشأتنا', about_factory_h2:'مصنع على أعلى مستوى',
    about_factory_desc:'18,000 م² من التصنيع الدقيق وفق المعايير الدولية.',
    about_factory1:'ورشة التجميع — 8,000 م²', about_factory2:'مختبر المعايرة', about_factory3:'مركز R&D', about_factory4:'خط الإنتاج الآلي', about_factory5:'مراقبة الجودة', about_factory6:'اللوجستيات',
    about_markets_lbl:'انتشار عالمي', about_markets_h2:'موثوق في 95+ دولة', about_markets_desc:'منتجاتنا تدعم البنية التحتية عالمياً.',
    about_cert_lbl:'جودة معتمدة', about_cert_h2:'شهادات دولية', about_cert_desc:'كل منتج يخضع للاختبار والاعتماد.',
    about_cert1_name:'علامة CE', about_cert1_desc:'المطابقة الأوروبية', about_cert2_name:'ISO 9001:2015', about_cert2_desc:'إدارة الجودة', about_cert3_name:'IEC 62053', about_cert3_desc:'معيار العدادات', about_cert4_name:'معتمد MID', about_cert4_desc:'أجهزة قياس أوروبية', about_cert5_name:'متوافق RoHS', about_cert5_desc:'مواد خطرة مقيّدة', about_cert6_name:'معتمد SABS', about_cert6_desc:'جنوب أفريقيا', about_cert7_name:'OIML R46', about_cert7_desc:'القياس الدولي', about_cert8_name:'معتمد CPA', about_cert8_desc:'اعتماد صيني',
    about_values_lbl:'قيمنا', about_values_h2:'قيمنا الجوهرية', about_values_desc:'المبادئ التي توجه كل قرار.',
    about_val1_title:'هندسة دقيقة', about_val1_desc:'كل عداد يُعايَر ويُختبر قبل الشحن.',
    about_val2_title:'موثوقية عالمية', about_val2_desc:'منتجات لبيئات متنوعة من الاستواء للقطب.',
    about_val3_title:'الشراكة أولاً', about_val3_desc:'كل عميل شريك طويل الأمد.',
    about_val4_title:'ابتكار مستمر', about_val4_desc:'R&D في قياس الجيل التالي وIoT.',
    about_val5_title:'ضمان الجودة', about_val5_desc:'ISO 9001:2015 ومعدل عيوب أقل من 0.1%.',
    about_val6_title:'تصنيع مسؤول', about_val6_desc:'مواد RoHS وإنتاج موفر للطاقة.',
    about_cta_lbl:'هل أنت مستعد؟', about_cta_h2:'ابدأ محادثة',
    about_cta_desc:'يسعدنا مناقشة متطلباتك.',
    about_cta_btn1:'تواصل معنا →', about_cta_btn2:'استكشاف المنتجات',
    contact_eyebrow:'تواصل معنا', contact_title:'لنتحدث عن الأعمال',
    contact_desc:'فريقنا يرد خلال 24 ساعة على طلبات العروض والاستفسارات.',
    contact_form_title:'أرسل لنا رسالة', contact_form_sub:'أكمل التفاصيل وسنعود إليك بسرعة.',
    contact_label_name:'الاسم الكامل', contact_label_email:'البريد الإلكتروني', contact_label_company:'الشركة', contact_label_country:'الدولة', contact_label_subject:'الموضوع', contact_label_message:'الرسالة',
    contact_placeholder_name:'محمد العبدالله', contact_placeholder_email:'mohammed@company.com', contact_placeholder_company:'شركتك',
    contact_select_country:'اختر دولتك', contact_select_topic:'اختر موضوعاً',
    contact_opt1:'استفسار منتج', contact_opt2:'طلب عرض سعر', contact_opt3:'شراكة OEM', contact_opt4:'الدعم الفني', contact_opt5:'الشهادات', contact_opt6:'الشحن', contact_opt7:'أخرى',
    contact_placeholder_msg:'صف متطلباتك والكميات والسوق المستهدف…',
    contact_submit:'إرسال', contact_success_title:'تم الإرسال!', contact_success_desc:'شكراً، سيرد فريقنا خلال يوم عمل.', contact_success_btn:'تصفح المنتجات →',
    contact_info_lbl:'تواصل مباشر', contact_info_h2:'نحن هنا لمساعدتك', contact_info_desc:'فريقنا يتحدث العربية والإنجليزية والصينية.',
    contact_email_lbl:'البريد', contact_wa_lbl:'واتساب', contact_addr_lbl:'العنوان', contact_addr_val:'رقم 88 شارع الصناعة، وينتشو، تشيجيانغ، الصين',
    contact_store_lbl:'المتاجر الإلكترونية', contact_hours_title:'ساعات العمل (UTC+8)',
    contact_hours_mf:'الاثنين – الجمعة', contact_hours_sat:'السبت', contact_hours_sun:'الأحد', contact_hours_closed:'مغلق',
    process_eyebrow:'كيف نعمل', process_title:'من التصميم إلى التسليم', process_desc:'عملية صارمة تضمن الجودة والدقة.',
    process_steps_lbl:'عمليتنا', process_steps_h2:'ست مراحل نحو التميز', process_steps_desc:'عملية محسّنة على 19 عاماً.',
    process_s1_num:'01', process_s1_title:'البحث والتطوير', process_s1_desc:'تصميم بناءً على متطلبات السوق.',
    process_s2_num:'02', process_s2_title:'توريد المكونات', process_s2_desc:'مكونات من موردين معتمدين.',
    process_s3_num:'03', process_s3_title:'التجميع الآلي', process_s3_desc:'500,000 وحدة/شهر على خطوط SMT.',
    process_s4_num:'04', process_s4_title:'المعايرة والاختبار', process_s4_desc:'معايرة فردية لكل وحدة.',
    process_s5_num:'05', process_s5_title:'الاعتماد والامتثال', process_s5_desc:'IEC وCE وOIML وMID وSABS.',
    process_s6_num:'06', process_s6_title:'مراقبة الجودة والاختبار البيئي', process_s6_desc:'بعد المعايرة، تخضع الوحدات لفحص جودة نهائي شامل يشمل الفحص البصري والتغليف والتأكد من تثبيت غطاء الأطراف. تخضع المنتجات للأسواق التصديرية لاختبارات بيئية إضافية: دورات حرارية (-25°م إلى +55°م)، اختبار الرطوبة (95% نسبة رطوبة)، اهتزاز، واختبار جهد النبضة وفق IEC 60068. نحافظ على معدل عيوب أقل من 0.1% عبر جميع خطوط الإنتاج.',
    process_s6_d1:'فحص بصري', process_s6_d2:'اختبار الدورة الحرارية', process_s6_d3:'اختبار الرطوبة', process_s6_d4:'جهد النبضة 6ك فولت', process_s6_d5:'اختبار الاهتزاز', process_s6_d6:'معدل عيوب <0.1%',
    process_s7_num:'07', process_s7_title:'التعبئة والشحن والاعتماد', process_s7_desc:'يتم تعبئة الوحدات المعتمدة في كراتين تصديرية مع حماية إسفنجية داخلية، مرافقة بكتيبات المستخدم وشهادات الاختبار والتوثيق. ننسق الشحن عبر موانئ شنغهاي ونينغبو (45 دقيقة)، وندير الشحنات الكاملة والجزئية والجوية والسريعة. حزمة توثيق كاملة: الفاتورة التجارية، قائمة التعبئة، شهادة المنشأ (CO)، إعلان CE، وتقارير الاختبار المقدمة لكل شحنة.',
    process_s7_d1:'تعبئة كراتين تصدير', process_s7_d2:'شهادات مرفقة', process_s7_d3:'ميناء شنغهاي/نينغبو', process_s7_d4:'حاويات كاملة/جزئية', process_s7_d5:'مستندات CO وCE', process_s7_d6:'دي إتش إل/فيديكس',
    process_s8_num:'08', process_s8_title:'الدعم الفني بعد البيع', process_s8_desc:'علاقتنا لا تنتهي عند التسليم. نقدم دعماً فنياً للتركيب والتشغيل والتكامل. كتيبات مستخدم باللغة الإنجليزية ومخططات توصيل وأدوات برمجية لجميع المنتجات. تحديثات البرامج الثابتة والقطع الغيار والمساعدة الفنية متاحة طوال عمر المنتج. يمكن لفريق الهندسة لدينا المساعدة في التكامل مع شركات الكهرباء وتكوين النظام الرئيسي ومتطلبات البرامج المخصصة.',
    process_s8_d1:'دعم التركيب', process_s8_d2:'توثيق إنجليزي', process_s8_d3:'تحديثات البرامج', process_s8_d4:'مساعدة التكامل', process_s8_d5:'دعم دورة الحياة', process_s8_d6:'واتساب/بريد إلكتروني',
    process_qc_lbl:'مراقبة الجودة', process_qc_h2:'لا تنازل في الجودة', process_qc_desc:'مراقبة مدمجة في كل مرحلة.',
    process_qc1_title:'معتمد ISO 9001:2015', process_qc1_desc:'نظام إدارة جودة معتمد بالكامل حسب ISO 9001:2015 يغطي التصميم والتوريد والإنتاج والاختبار وخدمة ما بعد البيع. يتم تدقيقه سنوياً من قبل جهات اعتماد خارجية.',
    process_qc2_title:'اختبار 100% من الوحدات', process_qc2_desc:'تخضع كل وحدة على حدة — وليس فقط عينات — للمعايرة الفردية والاختبار الوظيفي قبل التعبئة. لا تغادر أي شحنة بدون شهادة اختبار كاملة لكل دفعة.',
    process_qc3_title:'مختبر المحاكاة البيئية', process_qc3_desc:'غرف مناخية قادرة على -40°م إلى +85°م، دورات رطوبة 95%، والتعرض للأشعة فوق البنفسجية تحاكي 10 سنوات من الظروف التشغيلية الحقيقية أثناء اختبار تأهيل المنتج.',
    process_qc4_title:'اختبار الجهد العالي والنبضات', process_qc4_desc:'اختبار جهد النبضة 6 كيلوفولت واختبار العزل AC 4 كيلوفولت حسب IEC 60068 يضمن أن العدادات تتحمل صواعق البرق والتغيرات المفاجئة في الشبكة دون فشل أو مخاطر.',
    process_qc5_title:'تتبع الدقة', process_qc5_desc:'جميع معدات المعايرة قابلة للتتبع إلى معايير القياس الوطنية PTB (ألمانيا) وNIST (أمريكا). شهادات المعايرة وعدم اليقين في القياس موثقة لكل منصة اختبار.',
    process_qc6_title:'التحكم الإحصائي في العمليات', process_qc6_desc:'مخططات SPC وتتبع العيوب عبر جميع خطوط الإنتاج تمكن التحسين المستمر. معدل العيوب الحالي أقل من 0.1% مع تتبع RMA لجميع المنتجات المرتجعة.',
    process_lead_lbl:'أوقات التسليم', process_lead_h2:'جداول زمنية واقعية', process_lead_desc:'من تأكيد الطلب حتى التسليم.',
    process_lead1_num:'7–15', process_lead1_unit:'يوم', process_lead1_lbl:'إنتاج عينات',
    process_lead2_num:'25–35', process_lead2_unit:'يوم', process_lead2_lbl:'طلب قياسي',
    process_lead3_num:'3–5', process_lead3_unit:'أيام', process_lead3_lbl:'الشحن الجوي',
    process_lead4_num:'20–30', process_lead4_unit:'يوم', process_lead4_lbl:'الشحن البحري',
    process_cta_lbl:'ابدأ طلبك', process_cta_h2:'اطلب عينة أو عرض سعر', process_cta_desc:'دع فريقنا يرشدك.',
    process_cta_btn1:'طلب عرض سعر →', process_cta_btn2:'تصفح المنتجات',
    sol_eyebrow:'ما نحله', sol_title:'حلول لكل تحدي في قياس الطاقة',
    sol_desc:'من السكني إلى الشبكة الذكية — يومين تمتلك الخبرة والنطاق.',
    sol_grid_lbl:'مجالات الحلول', sol_grid_h2:'مصممة لتطبيقك', sol_grid_desc:'منتجات وتوثيق تقني.',
    sol1_title:'قياس الطاقة السكنية', sol1_desc:'عدادات للفواتير والقياس الفرعي والدفع المسبق.', sol1_link:'عرض المنتجات →',
    sol2_title:'القياس الصناعي', sol2_desc:'عدادات دقيقة مع RS485 وModbus.', sol2_link:'عرض المنتجات →',
    sol3_title:'الدفع المسبق', sol3_desc:'عدادات رمز وبطاقة IC وSTS.', sol3_link:'عرض عدادات →',
    sol4_title:'بنية AMR/AMI', sol4_desc:'مركزات وبوابات ذكية وعدادات PLC.', sol4_link:'عرض البوابات →',
    sol5_title:'قياس التيار والجهد', sol5_desc:'محولات تيار وجهد ومرحلات حماية.', sol5_link:'عرض المحولات →',
    sol6_title:'حلول OEM', sol6_desc:'برامج وعلامات وتعديلات مخصصة.', sol6_link:'مناقشة OEM →',
    sol_ind_lbl:'القطاعات', sol_ind_h2:'مصمم لقطاعات متعددة', sol_ind_desc:'منتجاتنا في صناعات متنوعة.',
    sol_ind1_name:'مرافق الكهرباء', sol_ind1_desc:'شركات توزيع وطنية وإقليمية',
    sol_ind2_name:'العقارات', sol_ind2_desc:'قياس فرعي للشقق والمجمعات',
    sol_ind3_name:'الصناعة', sol_ind3_desc:'مصانع ومنشآت صناعية',
    sol_ind4_name:'الحكومة', sol_ind4_desc:'بنية تحتية عامة',
    sol_ind5_name:'المدن الذكية', sol_ind5_desc:'قياس IoT حضري',
    sol_ind6_name:'الاتصالات', sol_ind6_desc:'مراقبة أبراج ومراكز بيانات',
    sol_ind7_name:'الزراعة', sol_ind7_desc:'ضخ وتكهرب ريفي',
    sol_ind8_name:'الطاقة المتجددة', sol_ind8_desc:'مراقبة شمسية وقياس شبكة',
    sol_tech_lbl:'الإمكانات التقنية', sol_tech_h2:'ما تدعمه منتجاتنا', sol_tech_desc:'الميزات الأساسية.',
    sol_tech1_title:'متعدد البروتوكولات', sol_tech1_desc:'RS485 وM-Bus وNB-IoT وZigbee وPLC.',
    sol_tech2_title:'دقة 0.2–1', sol_tech2_desc:'من الفواتير السكنية لعدادات المرجع.',
    sol_tech3_title:'نطاق جهد واسع', sol_tech3_desc:'100–240V أحادي وثلاثي الطور.',
    sol_tech4_title:'متوافق STS', sol_tech4_desc:'IEC 62055-41 لمنصات المرافق.',
    sol_tech5_title:'كشف العبث', sol_tech5_desc:'كشف مغناطيسي وتيار عكسي.',
    sol_tech6_title:'سكة DIN والتركيب', sol_tech6_desc:'DIN 35mm وأغلفة مخصصة.',
    sol_cta_lbl:'ابحث عن حلك', sol_cta_h2:'لست متأكداً؟',
    sol_cta_desc:'فريقنا يساعدك في تحديد التهيئة الصحيحة.',
    sol_cta_btn1:'تواصل مع المبيعات →', sol_cta_btn2:'تحميل الكتالوج',
    prod_browse_cat:'تصفح حسب الفئة', prod_search:'ابحث عن منتجات…', prod_all:'جميع المنتجات',
    prod_sort:'ترتيب', prod_default:'افتراضي', prod_price_asc:'السعر: من الأقل',
    prod_price_desc:'السعر: من الأعلى', prod_az:'الاسم: أ–ي', prod_za:'الاسم: ي–أ',
    prod_load_more:'تحميل المزيد', prod_no_results:'لم يتم العثور على منتجات',
    prod_desc:'تصفح مجموعتنا الكاملة من عدادات الطاقة ومنظمات الجهد ومحولات التيار والإكسسوارات. معتمد CE. موثوق في أكثر من 95 دولة.',
    prod_cat_energy_meter:'عدادات الطاقة', prod_cat_voltage_stabilizer:'منظمات الجهد', prod_cat_current_transformer:'محولات التيار', prod_cat_variac:'محولات متغيرة', prod_cat_terminal:'أطراف وموصلات', prod_cat_solar:'الطاقة الشمسية', prod_cat_fuse:'فيوزات وحماية', prod_cat_voltage_protector:'حماية الجهد', prod_cat_socket:'مقابس وأسلاك', prod_cat_tile:'تسوية البلاط', prod_cat_tools:'أدوات ومعدات', prod_cat_seal:'أختام أمان', prod_cat_other:'منتجات أخرى',
  }
};

/* ─── STATE ─────────────────────────────────────────── */
let currentLang = localStorage.getItem('ym_lang') || 'en';
let currentTheme = localStorage.getItem('ym_theme') || 'dark';

/* ─── LANGUAGE ──────────────────────────────────────── */
function setLang(l) {
  if (!T[l]) return;
  currentLang = l;
  localStorage.setItem('ym_lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.body.classList.toggle('ar', isRTL);
  applyTranslations();
  updateLangUI();
}

function applyTranslations() {
  const d = T[currentLang];
  if (!d) return;
  // Support both data-t (inner pages) and data-i18n (index.html) attributes
  document.querySelectorAll('[data-t],[data-i18n]').forEach(el => {
    const k = el.dataset.t || el.dataset.i18n;
    if (!k || d[k] === undefined) return;
    const tag = el.tagName;
    if ((tag === 'INPUT' || tag === 'TEXTAREA') && el.type !== 'submit') {
      el.placeholder = d[k];
    } else if (d[k].includes('<')) {
      el.innerHTML = d[k];
    } else {
      el.textContent = d[k];
    }
  });
}

function updateLangUI() {
  document.querySelectorAll('.lopt, .mlb').forEach(b => b.classList.toggle('act', b.dataset.lang === currentLang));
  const lbtnTxt = document.getElementById('lbtn-txt');
  if (lbtnTxt) lbtnTxt.textContent = currentLang.toUpperCase();
}

/* ─── THEME ─────────────────────────────────────────── */
function setTheme(t) {
  currentTheme = t;
  localStorage.setItem('ym_theme', t);
  document.body.classList.toggle('light', t === 'light');
  // Update theme-pair buttons (both index.html's and injected ones)
  const btnDark = document.getElementById('btnDark');
  const btnLight = document.getElementById('btnLight');
  if (btnDark) btnDark.classList.toggle('tpbtn-act', t !== 'light');
  if (btnLight) btnLight.classList.toggle('tpbtn-act', t === 'light');
  // Legacy single-button support
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = t === 'light' ? '🌙' : '☀️';
}

/* ─── NAV INIT ──────────────────────────────────────── */
(function initNav() {
  // Scroll shadow
  const nav = document.querySelector('nav');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('sc', scrollY > 40), {passive:true});

  // Inject theme toggle pair (skip if already present)
  const nrt = document.querySelector('.n-rt');
  if (nrt && !document.getElementById('theme-toggle') && !document.querySelector('.theme-pair') && !document.getElementById('btnDark')) {
    const pair = document.createElement('div');
    pair.className = 'theme-pair';
    pair.innerHTML = `
      <button class="tpbtn tpbtn-act" id="btnDark" title="Dark mode" aria-label="Dark mode">🌙</button>
      <button class="tpbtn" id="btnLight" title="Light mode" aria-label="Light mode">☀️</button>`;
    const ham = document.getElementById('ham');
    ham ? nrt.insertBefore(pair, ham) : nrt.appendChild(pair);
  }
  // Always attach handlers to theme buttons (whether injected or pre-existing in HTML)
  const btnDark = document.getElementById('btnDark');
  const btnLight = document.getElementById('btnLight');
  if (btnDark) btnDark.addEventListener('click', () => setTheme('dark'));
  if (btnLight) btnLight.addEventListener('click', () => setTheme('light'));

  // Language dropdown
  const lbtn = document.querySelector('.lbtn');
  const ldrop = document.querySelector('.ldrop');
  if (lbtn && ldrop) {
    lbtn.addEventListener('click', e => { e.stopPropagation(); ldrop.classList.toggle('op'); });
    document.addEventListener('click', e => { if (!lbtn.contains(e.target)) ldrop.classList.remove('op'); });
  }

  // Language buttons (all .lopt and .mlb)
  document.querySelectorAll('.lopt, .mlb').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      if (ldrop) ldrop.classList.remove('op');
      const mob = document.getElementById('mob');
      if (mob) mob.classList.remove('op');
    });
  });

  // Mobile menu
  const ham = document.getElementById('ham');
  const mob = document.getElementById('mob');
  const mobX = document.getElementById('mob-x') || document.getElementById('mobX');
  if (ham && mob) {
    ham.addEventListener('click', () => mob.classList.add('op'));
    if (mobX) mobX.addEventListener('click', () => mob.classList.remove('op'));
    mob.addEventListener('click', e => { if (e.target === mob) mob.classList.remove('op'); });
  }

  // Active nav link
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.n-ctr a, .mob a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('?')[0];
    if (href && page === href) a.classList.add('active');
    else if (!href || href === '' || href === '#') { /* skip */ }
  });
})();

/* ─── CURSOR ─────────────────────────────────────────── */
(function initCursor() {
  const cur = document.querySelector('.cur');
  // Support both class .cur-r (inner pages) and id #curR (index.html)
  const curR = document.querySelector('.cur-r') || document.getElementById('curR');
  if (!cur || !curR) return;
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.transform = `translate(${mx-5}px,${my-5}px)`;
  });
  (function loop(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; curR.style.transform=`translate(${rx-18}px,${ry-18}px)`; requestAnimationFrame(loop); })();
  document.addEventListener('mousedown', () => { curR.style.width='28px'; curR.style.height='28px'; });
  document.addEventListener('mouseup',   () => { curR.style.width='36px'; curR.style.height='36px'; });
})();

/* ─── SCROLL REVEAL ──────────────────────────────────── */
(function initReveal() {
  const obs = new IntersectionObserver(es => {
    es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('vis'); obs.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.rv').forEach(el => obs.observe(el));
})();

/* ─── FLOAT BUTTONS (WeChat + WhatsApp) ─────────────── */
(function injectFloatButtons() {
  // Don't inject if index.html already has its own float buttons
  if (document.querySelector('.wa-btn') || document.querySelector('.float-btn-wa')) return;

  // WeChat QR modal
  const overlay = document.createElement('div');
  overlay.className = 'wc-modal-overlay';
  overlay.id = 'wc-modal';
  overlay.innerHTML = `
    <div class="wc-modal">
      <div class="wc-modal-icon">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="#07c160"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.895-6.348-7.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.063-6.122zm-3.89 3.049c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/></svg>
      </div>
      <div class="wc-modal-title">WeChat / 微信</div>
      <div class="wc-modal-sub">Scan with WeChat to connect with us</div>
      <div class="wc-qr-wrap">
        <img src="assets/wechat-qr.jpg" alt="WeChat QR Code" class="wc-qr-img"/>
      </div>
      <button class="wc-modal-close" id="wc-close">✕ Close</button>
    </div>`;
  document.body.appendChild(overlay);
  document.getElementById('wc-close').addEventListener('click', () => overlay.classList.remove('op'));
  overlay.addEventListener('click', e => { if(e.target === overlay) overlay.classList.remove('op'); });
  document.addEventListener('keydown', e => { if(e.key==='Escape') overlay.classList.remove('op'); });

  // WeChat + WhatsApp stacked buttons
  const wrap = document.createElement('div');
  wrap.className = 'float-btns';
  wrap.innerHTML = `
    <button class="float-btn float-btn-wc" id="wechat-float-btn" aria-label="WeChat">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.895-6.348-7.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.063-6.122zm-3.89 3.049c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z"/></svg>
      <span class="float-btn-label">WeChat</span>
    </button>
    <a href="https://wa.me/8618957734521" target="_blank" rel="noopener" class="float-btn float-btn-wa" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      <span class="float-btn-label">WhatsApp</span>
    </a>`;
  document.body.appendChild(wrap);
  document.getElementById('wechat-float-btn').addEventListener('click', () => overlay.classList.add('op'));
})();

/* ─── INIT ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setLang(currentLang);
});
