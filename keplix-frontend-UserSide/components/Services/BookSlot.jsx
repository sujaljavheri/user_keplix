// BookSlot.jsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BookSlot({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [availableDates, setAvailableDates] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookingData = async () => {
      setLoading(true);
      try {
        // Dummy data for now
        setAvailableDates([5, 9, 10, 11, 25, 26]);
        setTimeSlots([
          "10:30AM",
          "11:30AM",
          "2:00PM",
          "3:30PM",
          "4:30PM",
          "6:00PM",
        ]);
      } catch (e) {
        console.error("availability error", e);
      } finally {
        setLoading(false);
      }
    };
    fetchBookingData();
  }, [currentDate]);

  const formatMonthYear = (date) =>
    date.toLocaleString("default", { month: "long", year: "numeric" });

  const handlePreviousMonth = () => {
    setCurrentDate((prev) => {
      const next = new Date(prev);
      next.setMonth(prev.getMonth() - 1);
      return next;
    });
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const next = new Date(prev);
      next.setMonth(prev.getMonth() + 1);
      return next;
    });
    setSelectedDate(null);
  };

  const getCalendarDates = () => {
    const y = currentDate.getFullYear();
    const m = currentDate.getMonth();
    const first = new Date(y, m, 1);
    const last = new Date(y, m + 1, 0);
    const days = last.getDate();

    const rows = [];
    let week = [];

    for (let i = 0; i < first.getDay(); i++) week.push(null);

    for (let d = 1; d <= days; d++) {
      week.push(d);
      if (week.length === 7) {
        rows.push(week);
        week = [];
      }
    }
    if (week.length > 0) {
      while (week.length < 7) week.push(null);
      rows.push(week);
    }
    return rows;
  };

  const isDateAvailable = (d) => !!d && availableDates.includes(d);

  const handleProceed = async () => {
    if (!selectedDate || !selectedTime) return;

    const booking = {
      providerId: "prov_123",
      serviceId: "svc_engine_repair",
      dateLabel: `${selectedDate} ${formatMonthYear(currentDate)}`,
      dateISO: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        selectedDate
      ).toISOString(),
      time: selectedTime,
    };
    // 👇 Navigate back to ServiceDetails with param
  // navigation.navigate("ServiceDetails", { bookingAdded: booking });

    navigation.navigate("MoreService", { addedBooking: booking });
  };

  // 🔹 Clear All handler
  const handleClearAll = () => {
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearText}>Clear all</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="red" style={{ flex: 1 }} />
      ) : (
        <>
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
              {daysOfWeek.map((d) => (
                <Text key={d} style={styles.dayLabel}>
                  {d}
                </Text>
              ))}
            </View>

            <View style={styles.calendarGrid}>
              {getCalendarDates().map((week, wi) => (
                <View key={wi} style={styles.weekRow}>
                  {week.map((d, di) => (
                    <TouchableOpacity
                      key={di}
                      disabled={!d}
                      onPress={() => isDateAvailable(d) && setSelectedDate(d)}
                      style={[
                        styles.dateCell,
                        d && isDateAvailable(d) && styles.availableDate,
                        d && selectedDate === d && styles.selectedDate,
                      ]}
                    >
                      <Text
                        style={[
                          d && styles.dateText,
                          d && isDateAvailable(d) && styles.availableDateText,
                          d && selectedDate === d && styles.selectedDateText,
                        ]}
                      >
                        {d || ""}
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
              {timeSlots.map((t) => (
                <TouchableOpacity
                  key={t}
                  onPress={() => setSelectedTime(t)}
                  style={[
                    styles.timeSlot,
                    selectedTime === t && styles.selectedTimeSlot,
                  ]}
                >
                  <Text
                    style={[
                      styles.timeText,
                      selectedTime === t && styles.selectedTimeText,
                    ]}
                  >
                    {t}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity
            disabled={!selectedDate || !selectedTime}
            onPress={handleProceed}
            style={[
              styles.bookButton,
              selectedDate && selectedTime && styles.bookButtonActive,
            ]}
          >
            <Text style={styles.bookButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30, // 🔹 Push content down a bit
    justifyContent: "space-between",
  },
  clearText: { color: "red", fontSize: 14, fontWeight: "500" },
  icon: {
    fontSize: 30,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  calendarContainer: {
    padding: 16,
    borderColor: "#E2E2E2",
    borderWidth: 2,
    borderRadius: 24,
    marginTop: 20, // 🔹 Push calendar down
  },
  monthSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  monthText: { fontSize: 20, fontWeight: "500" },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 8,
    marginLeft: -5,
  },
  dayLabel: {
    fontSize: 12,
    color: "#666",
    fontWeight: "500",
    width: 40,
    textAlign: "center",
  },
  calendarGrid: { borderRadius: 12, overflow: "hidden" },
  weekRow: { flexDirection: "row", justifyContent: "flex-start", gap: 4, marginLeft: 5 },
  dateCell: { width: 40, height: 40, justifyContent: "center", alignItems: "center", margin: 2 },
  dateText: { fontSize: 16, color: "#000", fontWeight: "300" },
  availableDateText: { color: "black" , fontWeight: "700"  },
  selectedDate: { backgroundColor: "red", borderRadius: 20 },
  selectedDateText: { color: "#fff" },
  timeSlotsContainer: { padding: 16, marginTop: 10 },
  sectionTitle: { fontSize: 16, color: "#0000008F", fontWeight: "500", marginBottom: 16 },
  timeGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  timeSlot: {
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  selectedTimeSlot: { backgroundColor: "red", borderColor: "#E2E2E2" },
  timeText: { fontSize: 14, color: "#000", fontWeight: "500" },
  selectedTimeText: { color: "#fff", fontWeight: "500" },
  bookButton: {
    marginTop: 80, // 🔹 Bring button lower
    margin: 16,
    padding: 16,
    borderRadius: 70,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
  },
  bookButtonActive: { backgroundColor: "red" },
  bookButtonText: { color: "#fff", fontSize: 16, fontWeight: "500" },
  dropdownIcon: {
    width: 20,
    height: 30,
    fontSize: 18,
    lineHeight: 26,
    color: "red",
    borderColor: "red",
    borderWidth: 1.5,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
});
