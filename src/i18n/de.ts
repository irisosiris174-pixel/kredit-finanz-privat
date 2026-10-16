import type { Translations } from './types';

export const de: Translations = {
  nav: {
    home: 'Startseite',
    about: 'Über uns',
    services: 'Unsere Lösungen',
    testimonials: 'Erfahrungen',
    apply: 'Kreditanfrage',
    contact: 'Kontakt',
    privacy: 'Datenschutz',
    legal: 'Impressum',
    calculator: 'Kreditrechner',
  },
  hero: {
    badge: 'Ihr vertrauenswürdiger Finanzpartner in Europa',
    title: 'Maßgeschneiderte Kreditlösungen für Ihre Träume',
    subtitle: 'Kredit Finanz Privat bietet Ihnen transparente, schnelle und verlässliche Privatkredite mit fairen Konditionen und fester Verzinsung ab 3% p.a.',
    ctaPrimary: 'Kredit online beantragen',
    ctaSecondary: 'Kredit berechnen',
    stat1Label: 'Zufriedene Kunden',
    stat1Val: '15.000+',
    stat2Label: 'Fester Jahreszins',
    stat2Val: '3,00%',
    stat3Label: 'Schnelle Bearbeitung',
    stat3Val: '24 Std.',
  },
  aboutBrief: {
    title: 'Exzellenz & Transparenz seit vielen Jahren',
    subtitle: 'Über Kredit Finanz Privat',
    desc1: 'Kredit Finanz Privat ist eine renommierte Finanzinstitution, die sich auf maßgeschneiderte Konsumentenkredite und Finanzierungslösungen für Privatpersonen spezialisiert hat.',
    desc2: 'Wir legen höchsten Wert auf Diskretion, Schnelligkeit und verlässliche Bedingungen ohne versteckte Kosten.',
    readMore: 'Mehr über uns erfahren',
    points: [
      'Fester Zinssatz von 3% p.a. ohne Überraschungen',
      '100% digitale und vertrauliche Bearbeitung',
      'Flexible Laufzeit von 12 bis 360 Monaten'
    ],
  },
  servicesBrief: {
    title: 'Unsere Finanzierungslösungen',
    subtitle: 'Passende Kreditangebote für jedes Lebensprojekt',
    viewAll: 'Alle Lösungen anzeigen',
  },
  simulator: {
    title: 'Interaktiver Kreditrechner',
    subtitle: 'Berechnen Sie Ihre monatliche Rate unverbindlich',
    amountLabel: 'Gewünschter Kreditbetrag (€)',
    durationLabel: 'Laufzeit (Monate)',
    months: 'Monate',
    years: 'Jahre',
    fixedRate: 'Fester Jahreszins',
    monthlyPayment: 'Geschätzte Monatsrate',
    totalInterest: 'Gesamtzinsen',
    totalAmount: 'Gesamtrückzahlungsbetrag',
    applyBtn: 'Diesen Kredit beantragen',
    disclaimer: 'Hinweis: Das Ergebnis dient als unverbindliches Berechnungsbeispiel bei einem eff. Jahreszins von 3,00%.',
  },
  steps: {
    title: 'In 4 einfachen Schritten zum Kredit',
    subtitle: 'Ein schneller und transparenter Ablauf',
    step1Title: '1. Berechnung & Antrag',
    step1Desc: 'Wählen Sie Ihren Wunschbetrag und füllen Sie das Online-Formular in nur 3 Minuten aus.',
    step2Title: '2. Schnelle Prüfung',
    step2Desc: 'Unsere Krediteperten prüfen Ihre Unterlagen vertraulich innerhalb von 24 Stunden.',
    step3Title: '3. Vertragsangebot',
    step3Desc: 'Sie erhalten ein verbindliches, transparentes Kreditangebot zu 3% Jahreszins.',
    step4Title: '4. Auszahlung',
    step4Desc: 'Nach Unterzeichnung wird Ihr Kreditbetrag direkt auf Ihr Bankkonto überwiesen.',
  },
  testimonialsSection: {
    title: 'Das sagen unsere Kunden',
    subtitle: 'Vertrauen und Zufriedenheit stehen bei Kredit Finanz Privat an erster Stelle',
    viewAll: 'Alle Erfahrungsberichte lesen',
  },
  faqSection: {
    title: 'Häufig gestellte Fragen (FAQ)',
    subtitle: 'Antworten auf Ihre wichtigsten Fragen zu unseren Krediten',
  },
  ctaBanner: {
    title: 'Bereit für Ihr nächstes Projekt?',
    subtitle: 'Stellen Sie jetzt Ihre unverbindliche Kreditanfrage und erhalten Sie eine Antwort innerhalb von 24 Stunden.',
    btn: 'Jetzt Antrag starten',
  },
  servicesPage: {
    heroTitle: 'Unsere maßgeschneiderten Kreditlösungen',
    heroSubtitle: 'Entdecken Sie flexible Finanzierungsmöglichkeiten für Ihre persönlichen Vorhaben.',
    personalLoan: {
      title: 'Privatkredit / Ratenkredit',
      desc: 'Ein flexibler Kredit zur freien Verfügung ohne Zweckbindung. Ideal für persönliche Wünsche, Reisen, Möbel oder unerwartete Ausgaben.',
      features: ['Beträge von 3.000 € bis 50.000 €', 'Freie Verwendung ohne Nachweis', 'Feste Monatsraten für maximale Planungssicherheit', 'Keine Sondertilgungsgebühren']
    },
    autoLoan: {
      title: 'Autokredit & Fahrzeuge',
      desc: 'Finanzieren Sie Neuwagen, Gebrauchtwagen, Motorräder oder Elektrofahrzeuge zu besonders günstigen Konditionen.',
      features: ['Schnelle Zusage für Ihren Fahrzeugkauf', 'Attraktiver Festzins von 3% p.a.', 'Laufzeiten bis zu 84 Monate', 'Einfache Abwicklung']
    },
    mortgageLoan: {
      title: 'Immobilienfinanzierung',
      desc: 'Erfüllen Sie sich den Traum vom Eigenheim oder einer Kapitalanlage mit unserer zuverlässigen Baufinanzierung.',
      features: ['Langfristige Zinssicherheit', 'Umfassende persönliche Beratung', 'Finanzierung von Kauf, Bau oder Anschlussfinanzierung', 'Transparente Konditionen']
    },
    renovationLoan: {
      title: 'Renovierungs- & Modernisierungskredit',
      desc: 'Investieren Sie in Ihr Zuhause: Sanierung, energetische Modernisierung, neue Küche oder Gartenumgestaltung.',
      features: ['Zweckgebundener Sonderzins', 'Keine Grundbucheintragung bei kleineren Summen nötig', 'Wertsteigerung Ihrer Immobilie', 'Flexible Rückzahlung']
    },
    studentLoan: {
      title: 'Studien- & Ausbildungsfinanzierung',
      desc: 'Investieren Sie in Ihre Zukunft und finanzieren Sie Studium, Weiterbildung oder Auslandssemester ohne finanziellen Druck.',
      features: ['Niedrige Raten während der Ausbildungszeit', 'Flexible Rückzahlungsmodelle nach Berufseintritt', 'Keine Sicherheiten erforderlich', 'Schnelle Bearbeitung']
    },
    consolidationLoan: {
      title: 'Kreditumschuldung & Zusammenfassung',
      desc: 'Fassen Sie mehrere bestehende Kredite zu einer einzigen, günstigeren Monatsrate zusammen und sparen Sie monatlich Geld.',
      features: ['Deutliche Senkung der monatlichen Gesamtbelastung', 'Nur noch ein einziger Ansprechpartner', 'Fester Jahreszins von 3%', 'Bessere Übersicht über Ihre Finanzen']
    }
  },
  aboutPage: {
    title: 'Über Kredit Finanz Privat',
    subtitle: 'Ihr verlässlicher Spezialist für transparente Privatkredite in Europa.',
    missionTitle: 'Unsere Mission',
    missionDesc: 'Bei Kredit Finanz Privat glauben wir daran, dass der Zugang zu fairen Finanzierungen einfach, transparent und frei von bürokratischen Hürden sein sollte. Wir begleiten Privatpersonen dabei, ihre Lebensprojekte sicher und nachhaltig zu verwirklichen.',
    valuesTitle: 'Unsere Grundwerte',
    valuesDesc: 'Unsere Arbeit basiert auf vier Grundpfeilern: Integrität, absolute Transparenz, Kundennähe und schnelle Entscheidungswege.',
    commitmentsTitle: 'Unsere Qualitätsversprechen',
    commitmentsList: [
      { title: 'Fester Jahreszins von 3%', desc: 'Keine variablen Überraschungen – Ihr Zinssatz bleibt über die gesamte Laufzeit konstant.' },
      { title: '100% Datenschutz & Sicherheit', desc: 'Keine Speicherung persönlicher Daten auf dem Webserver. Ihre Anfrage wird verschlüsselt verarbeitet.' },
      { title: 'Schnelle Bearbeitung', desc: 'Innerhalb von 24 Stunden nach Antragstellung erhalten Sie eine Rückmeldung.' },
      { title: 'Persönliche Betreuung', desc: 'Unser Beratungsteam steht Ihnen bei allen Fragen kompetent zur Seite.' }
    ]
  },
  applyPage: {
    badge: 'Online-Antragsformular',
    title: 'Kreditanfrage stellen',
    subtitle: 'Füllen Sie das Formular aus. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    form: {
      personalInfo: '1. Persönliche Angaben',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      country: 'Wohnsitzland',
      creditDetails: '2. Kreditwunsch',
      amount: 'Gewünschter Betrag (€) (mind. 3.000 €)',
      duration: 'Gewünschte Laufzeit (Monate)',
      purpose: 'Verwendungszweck',
      purposeOptions: {
        personal: 'Privatkredit zur freien Verfügung',
        auto: 'Autokredit / Fahrzeug',
        mortgage: 'Immobilienkredit',
        renovation: 'Renovierung & Modernisierung',
        student: 'Studium & Ausbildung',
        consolidation: 'Kreditzusammenfassung / Umschuldung'
      },
      financialInfo: '3. Berufs- und Finanzsituation',
      employmentStatus: 'Beschäftigungsverhältnis',
      employmentOptions: {
        employed: 'Angestellte(r) / Beamte(r)',
        selfEmployed: 'Selbstständige(r) / Freiberufler',
        retired: 'Rentner(in)',
        student: 'Student(in) / In Ausbildung',
        other: 'Sonstiges'
      },
      monthlyIncome: 'Nettoeinkommen pro Monat (€)',
      monthlyExpenses: 'Monatliche Ausgaben / Miete (€)',
      consentText: 'Ich bestätige die Richtigkeit der Angaben und stimme der vertraulichen Bearbeitung meiner Kreditanfrage zu.',
      submitBtn: 'Kreditanfrage absenden',
      submitting: 'Wird gesendet...',
      successTitle: 'Vielen Dank für Ihre Anfrage!',
      successMsg: 'Ihre Kreditanfrage wurde erfolgreich an unser Team übermittelt. Wir prüfen Ihre Angaben und kontaktieren Sie innerhalb von 24 Stunden.',
      errorMsg: 'Beim Senden Ihrer Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.'
    }
  },
  legalPage: {
    title: 'Impressum / Rechtliche Hinweise',
    lastUpdated: 'Stand: Oktober 2026',
    companyInfo: 'Unternehmensangaben',
    companyName: 'Kredit Finanz Privat',
    address: '05 rue du gabian, 98000 Monaco',
    email: 'contact@kredit-finanz-privat.com',
    phone: 'Kontakt per E-Mail',
    regNumber: 'Registernummer: MC-KFP-2026-EU',
    regulatoryInfo: 'Aufsichtsbehörde & Regulierung',
    disclaimer: 'Kredit Finanz Privat ist eine spezialisierte Institution für Verbraucherkreditlösungen. Alle Angaben auf dieser Website dienen der Information und stellen kein bindendes Vertragsangebot dar. Ein Kreditvertrag kommt erst nach Prüfung der Bonität und Unterzeichnung der offiziellen Unterlagen zustande.'
  },
  privacyPage: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Stand: Oktober 2026',
    intro: 'Der Schutz Ihrer persönlichen Daten hat für Kredit Finanz Privat höchste Priorität. Nachfolgend informieren wir Sie transparent über die Handhabung von Daten auf kredit-finanz-privat.com.',
    dataUsage: 'Keine Speicherung auf Webservern oder Datenbanken: Kredit Finanz Privat speichert keinerlei personenbezogene Daten auf der Website oder in einer Server-Datenbank. Wenn Sie unser Formular nutzen, werden die eingegebenen Daten ausschließlich zur Übermittlung der Kreditanfrage via Resend per E-Mail an contact@kredit-finanz-privat.com verwendet.',
    resendNote: 'Der Versand erfolgt verschlüsselt über den zertifizierten E-Mail-Dienstanbieter Resend unter Einhaltung strenger Sicherheitsstandards.',
    rights: 'Ihre Rechte: Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Widerruf der Verarbeitung Ihrer Daten. Richten Sie Ihre Anfragen hierzu bitte direkt an contact@kredit-finanz-privat.com.',
    cookies: 'Cookies & Tracking: Diese Website verwendet lediglich technisch notwendige Session-Cookies zur Aufrechterhaltung der Sprachauswahl und Funktionalität der Website.'
  },
  footer: {
    desc: 'Kredit Finanz Privat ist Ihr verlässlicher Spezialist für Privatkredite, Umschuldungen und maßgeschneiderte Finanzierungslösungen in Europa.',
    quickLinks: 'Schnelllinks',
    ourServices: 'Unsere Dienstleistungen',
    legalLinks: 'Rechtliches',
    contactInfo: 'Kontakt & Kundenservice',
    rights: 'Alle Rechte vorbehalten. Kredit Finanz Privat',
    address: '05 rue du gabian, 98000 Monaco | E-Mail: contact@kredit-finanz-privat.com',
  },
  notFound: {
    title: 'Seite nicht gefunden (404)',
    desc: 'Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.',
    backHome: 'Zurück zur Startseite',
  }
};
