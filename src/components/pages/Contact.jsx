import React from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="row contact_us__background">
      <div className="col-11 col-md-8 m-md-auto py-5 text-right" dir="rtl">
        <Card>
          <Card.Header>
            <Card.Title>ارتباط با ما</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>نام و نام خانوادگی</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>آدرس ایمیل</Form.Label>
                <Form.Control type="email" placeholder="آدرس ایمیل" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>شماره تلفن</Form.Label>
                <Form.Control type="phone" placeholder="شماره تلفن" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>پیغام شما</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="پیغام شما"
                  rows={6}
                  required
                />
              </Form.Group>
              <Button
                className="d-block m-auto"
                variant="success"
                type="submit"
              >
                ارسال
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
