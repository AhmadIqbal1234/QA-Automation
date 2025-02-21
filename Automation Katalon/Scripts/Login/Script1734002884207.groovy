import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl(GlobalVariable.baseUrl)

WebUI.setText(findTestObject('Object Repository/Login/Page_OrangeHRM/input_Username_username'), usernameValid)

WebUI.setEncryptedText(findTestObject('Object Repository/Login/Page_OrangeHRM/input_Password_password'), passwordInvalid)

WebUI.click(findTestObject('Object Repository/Login/Page_OrangeHRM/button_Login'))

WebUI.verifyElementVisible(findTestObject('Login/Page_OrangeHRM/div_Invalid credentials'))

WebUI.setText(findTestObject('Object Repository/Login/Page_OrangeHRM/input_Username_username'), usernameInvalid)

WebUI.setEncryptedText(findTestObject('Object Repository/Login/Page_OrangeHRM/input_Password_password'), passwordValid)

WebUI.click(findTestObject('Object Repository/Login/Page_OrangeHRM/button_Login'))

WebUI.verifyElementVisible(findTestObject('Object Repository/Login/Page_OrangeHRM/div_Invalid credentials'))

WebUI.click(findTestObject('Object Repository/Login/Page_OrangeHRM/button_Login'))

WebUI.click(findTestObject('Object Repository/Login/Page_OrangeHRM/span_Required'))

WebUI.click(findTestObject('Object Repository/Login/Page_OrangeHRM/span_Required'))

WebUI.setText(findTestObject('Object Repository/Login/Page_OrangeHRM/input_Username_username'), usernameValid)

WebUI.setEncryptedText(findTestObject('Object Repository/Login/Page_OrangeHRM/input_Password_password'), passwordValid)

WebUI.click(findTestObject('Object Repository/Login/Page_OrangeHRM/button_Login'))

WebUI.click(findTestObject('Object Repository/Admin/Page_OrangeHRM/a_Admin'))
//Simpan session/login state ke Global Variable (opsional)
GlobalVariable.isLoggedIn = true

