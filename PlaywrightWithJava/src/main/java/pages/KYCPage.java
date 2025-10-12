package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class KYCPage {
    @FindBy(id = "id-upload")
    private WebElement idUpload;
    @FindBy(id = "address-upload")
    private WebElement addressUpload;
    @FindBy(id = "submit-kyc")
    private WebElement submitButton;
    @FindBy(css = ".kyc-success")
    private WebElement kycSuccess;
    @FindBy(css = ".kyc-error")
    private WebElement kycError;

    public KYCPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    public void uploadDocument(String type, String filePath) {
        if (type.equals("id")) {
            idUpload.sendKeys(filePath);
        } else {
            addressUpload.sendKeys(filePath);
        }
    }

    public void submit() {
        submitButton.click();
    }

    public boolean isVerificationSuccess() {
        return kycSuccess.isDisplayed();
    }

    public boolean isVerificationFailed() {
        return kycError.isDisplayed();
    }
}
