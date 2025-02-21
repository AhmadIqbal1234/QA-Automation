import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.callTestCase(findTestCase('Login'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.click(findTestObject('Object Repository/Admin/Page_OrangeHRM/button_Add'))

WebUI.click(findTestObject('Object Repository/Admin/Page_OrangeHRM/i_-- Select --_oxd-icon bi-caret-up-fill ox_627fec'))

WebUI.click(findTestObject('Object Repository/Admin/Page_OrangeHRM/div_Admin'))

WebUI.click(findTestObject('Admin/Page_OrangeHRM/i_-- Select --_oxd-icon bi-caret-up-fill oxd-select-text--arrow'))

WebUI.click(findTestObject('Object Repository/Admin/Page_OrangeHRM/div_Enabled'))

WebUI.setText(findTestObject('Object Repository/Admin/Page_OrangeHRM/input'), 'Henry Williams')

WebUI.delay(2)

WebUI.click(findTestObject('Admin/Page_OrangeHRM/div_Henry  Williams'))

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Admin/Page_OrangeHRM/input_Username_oxd-input oxd-input--focus'))

WebUI.setText(findTestObject('Object Repository/Admin/Page_OrangeHRM/input_Username_oxd-input oxd-input--focus o_d4f516'), 
    'luwaki')

WebUI.setEncryptedText(findTestObject('Object Repository/Admin/Page_OrangeHRM/input_Password_oxd-input oxd-input--active'), 
    'RigbBhfdqOCo21l43Dwk+w==')

WebUI.setEncryptedText(findTestObject('Admin/Page_OrangeHRM/input_Confirm Password_oxd-input oxd-input--focus'), 'RigbBhfdqOCo21l43Dwk+w==')

WebUI.click(findTestObject('Object Repository/Admin/Page_OrangeHRM/button_Save'))

WebUI.click(findTestObject('Object Repository/Admin/Page_OrangeHRM/div_SuccessSuccessfully Saved'))

WebUI.closeBrowser()

