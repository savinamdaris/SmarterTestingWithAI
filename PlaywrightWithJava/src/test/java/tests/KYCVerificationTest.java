package tests;

import org.testng.annotations.Test;
import org.testng.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pages.KYCPage;

public class KYCVerificationTest {
    WebDriver driver;

    @Test
    public void testValidKYCVerification() {
        driver = new ChromeDriver();
        driver.get("https://your-app-url.com/kyc");
        KYCPage kycPage = new KYCPage(driver);
        kycPage.uploadDocument("id", "test-data/valid_id.pdf");
        kycPage.uploadDocument("address", "test-data/valid_address.pdf");
        kycPage.submit();
        Assert.assertTrue(kycPage.isVerificationSuccess());
        driver.quit();
    }

    @Test
    public void testInvalidKYCVerification() {
        driver = new ChromeDriver();
        driver.get("https://your-app-url.com/kyc");
        KYCPage kycPage = new KYCPage(driver);
        kycPage.uploadDocument("id", "test-data/expired_id.pdf");
        kycPage.submit();
        Assert.assertTrue(kycPage.isVerificationFailed());
        driver.quit();
    }
}
