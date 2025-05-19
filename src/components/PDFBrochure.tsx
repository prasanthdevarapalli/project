import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { curriculumData } from '../data/curriculumData';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: 20,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#1d4ed8',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: '#4b5563'
  },
  section: {
    marginBottom: 15
  },
  moduleTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: '#1e40af',
    fontWeight: 'bold'
  },
  topic: {
    fontSize: 12,
    marginBottom: 4,
    marginLeft: 15,
    color: '#374151'
  },
  contact: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 12,
    color: '#4b5563'
  }
});

const PDFBrochure = () => {
  return (
    <PDFViewer style={{ width: '100vw', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>Data Engineering School</Text>
            <Text style={styles.subtitle}>Comprehensive Data Engineering Program with Job Guarantee</Text>
          </View>

          {curriculumData.map((module, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.moduleTitle}>
                Module {index + 1}: {module.title}
              </Text>
              {module.topics.map((topic, topicIndex) => (
                <Text key={topicIndex} style={styles.topic}>
                  • {topic}
                </Text>
              ))}
            </View>
          ))}

          <View style={styles.contact}>
            <Text>Contact us to enroll or learn more:</Text>
            <Text>WhatsApp: +91 939-194-6765</Text>
            <Text>Location: Hyderabad, Telangana, India</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PDFBrochure;