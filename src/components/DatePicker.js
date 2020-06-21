import React, { useState } from "react"
import { TouchableOpacity, View, StyleSheet, Text  } from "react-native"
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { Feather } from '@expo/vector-icons'

const DatePicker = () => {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
	const [data, setData] = useState(new Date())

	const showDatePicker = () => {
		setDatePickerVisibility(true)
	}

	const hideDatePicker = () => {
		setDatePickerVisibility(false)
	}

	const handleConfirm = (date) => {
		setData(date) //nao funciona		
		hideDatePicker()
		console.log(date)
	}

		return (
			<View>
				<TouchableOpacity style={styles.calendarButtonStyle} onPress={showDatePicker}>
					<View >
						<Feather name="calendar" size={22}/>
					</View>
				</TouchableOpacity>
				<DateTimePickerModal
					isVisible={isDatePickerVisible}
					mode="date"
					onConfirm={handleConfirm}
					onCancel={hideDatePicker}					
				/>
			</View>
		)
}

const styles = StyleSheet.create({

		calendarButtonStyle : {
				backgroundColor: "#4da6ff",
				borderRadius: 4,
				height: 30,
				width: 40,
				justifyContent: "center",
				alignItems: "center"
		}
})

export default DatePicker