import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookSlot({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2)); 

  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const handlePreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
    setSelectedDate(null); 
  };

  const handleProceed = () => {
    if (selectedDate && selectedTime) {
      navigation.navigate('ReviewPage', {
        date: `${selectedDate} June 2025`,
        time: selectedTime
      });
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
    setSelectedDate(null); 
  };

  const getCalendarDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const dates = [];
    let currentWeek = [];

    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      currentWeek.push(null);
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push(day);
      
      if (currentWeek.length === 7) {
        dates.push(currentWeek);
        currentWeek = [];
      }
    }

    // Add empty cells for remaining days
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      dates.push(currentWeek);
    }

    return dates;
  };

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  // Available time slots
  const timeSlots = [
    '10:30AM',
    '11:30AM',
    '2:00PM',
    '3:30PM',
    '4:30PM',
    '6:00PM'
  ];

  // Function to check if date is available (customize as needed)
  const isDateAvailable = (date) => {
    const availableDates = [5, 9, 10, 11, 25, 26];
    return availableDates.includes(date);
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    if (date && isDateAvailable(date)) {
      setSelectedDate(date);
    }
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.calendarContainer}>
        <View style={styles.monthSelector}>
          <TouchableOpacity onPress={handlePreviousMonth}>
            <Ionicons name="chevron-back" style={styles.dropdownIcon} />
          </TouchableOpacity>
          <Text style={styles.monthText}>{formatMonthYear(currentDate)}</Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <Ionicons name="chevron-forward" style={styles.dropdownIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.daysRow}>
          {daysOfWeek.map((day, index) => (
            <Text key={index} style={styles.dayLabel}>
              {day}
            </Text>
          ))}
        </View>

        <View style={styles.calendarGrid}>
          {getCalendarDates().map((week, weekIndex) => (
            <View key={weekIndex} style={styles.weekRow}>
              {week.map((date, dateIndex) => (
                <TouchableOpacity
                  key={dateIndex}
                  onPress={() => handleDateSelect(date)}
                  style={[
                    styles.dateCell,
                    date && isDateAvailable(date) && styles.availableDate,
                    date && selectedDate === date && styles.selectedDate,
                  ]}
                  disabled={!date}
                >
                  <Text
                    style={[
                      date && styles.dateText,
                      date && isDateAvailable(date) && styles.availableDateText,
                      date && selectedDate === date && styles.selectedDateText,
                    ]}
                  >
                    {date || ''}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.timeSlotsContainer}>
        <Text style={styles.sectionTitle}>Available Time Slots:</Text>
        <View style={styles.timeGrid}>
          {timeSlots.map((time, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlot,
                selectedTime === time && styles.selectedTimeSlot,
              ]}
              onPress={() => handleTimeSelect(time)}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && styles.selectedTimeText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.bookButton,
          selectedDate && selectedTime && styles.bookButtonActive,
        ]}
        disabled={!selectedDate || !selectedTime}
        onPress={handleProceed}
      >
        <Text style={styles.bookButtonText}>Book Slot</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: '75%',
  },
  icon: {
    fontSize: 30,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  backButton: {
    padding: 8,
  },
  calendarContainer: {
    padding: 16,
    borderColor: '#E2E2E2',
    borderWidth: 2,
    borderRadius: 24,
  },
  monthSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  dayLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
    fontFamily: 'DM',
    width: 40,
    textAlign: 'center',
  },
  calendarGrid: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  dateCell: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'DM',
  },
  availableDateText: {
    color: '#40A69F',
  },
  selectedDate: {
    backgroundColor: '#4E46B4',
    borderRadius: 20,
  },
  selectedDateText: {
    color: '#fff',
  },
  timeSlotsContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#0000008F',
    fontWeight: '500',
    fontFamily: 'DM',
    marginBottom: 16,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  timeSlot: {
    marginBottom:10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  selectedTimeSlot: {
    backgroundColor: '#4E46B4',
    borderColor: '#E2E2E2',
  },
  timeText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    fontFamily: 'DM',
  },
  selectedTimeText: {
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'DM',
  },
  bookButton: {
    marginTop:100,
    margin: 16,
    padding: 16,
    borderRadius: 70,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  bookButtonActive: {
    backgroundColor: '#4E46B4',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'DM',
  },
  dropdownIcon: {
    width:20,
    height: 30,
    fontSize: 18,
    lineHeight:26,
    color: "#4E46B4",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4E46B4",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});

