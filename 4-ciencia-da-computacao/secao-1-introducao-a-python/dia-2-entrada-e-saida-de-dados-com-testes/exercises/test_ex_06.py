import pytest
from ex_06 import validate_email


def test_useremail_can_only_contain_letters():
    assert validate_email("test@email.com") is None


def test_useremail_can_only_contain_letters_and_digits():
    assert validate_email("test123@email.com") is None


def test_useremail_can_only_contain_letters_digits_and_dashes():
    assert validate_email("test-123@email.com") is None


def test_useremail_can_only_contain_letters_digits_dashes_and_underscores():
    assert validate_email("test-123_ok@email.com") is None


def test_useremail_should_starts_with_letter():
    assert validate_email("test@email.com") is None


def test_useremail_when_dont_start_with_letter_raise_exception():
    with pytest.raises(ValueError):
        validate_email("123-test@email.com")


def test_useremail_is_invalid_raise_exception():
    with pytest.raises(ValueError):
        validate_email("test!1@email.com")


def test_website_contain_only_letters_and_digits():
    assert validate_email("test@email123.com") is None


def test_website_invalid_chars_raise_exception():
    with pytest.raises(ValueError):
        validate_email("test@emai!l.com")


def test_extension_max_size_is_three():
    assert validate_email("test@email.com") is None


def test_extension_max_size_is_more_than_three_raise_exception():
    with pytest.raises(ValueError):
        validate_email("test@email.commerce")
