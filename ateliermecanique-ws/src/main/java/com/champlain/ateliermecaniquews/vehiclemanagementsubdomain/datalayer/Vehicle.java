package com.champlain.ateliermecaniquews.vehiclemanagementsubdomain.datalayer;

import com.champlain.ateliermecaniquews.customeraccountsmanagementsubdomain.datalayer.CustomerAccount;
import com.champlain.ateliermecaniquews.customeraccountsmanagementsubdomain.datalayer.CustomerAccountIdentifier;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "vehicles")
@Data
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Embedded
    private VehicleIdentifier vehicleIdentifier;

//    @Embedded
//    private CustomerAccountIdentifier customerAccountIdentifier;

    @Column(name = "customer_id")
    private String customerId;
    private String make;
    private String model;
    private String year;
    @Enumerated(EnumType.STRING)
    @Column(name = "transmission_type")
    private TransmissionType transmission_type;
    private String mileage;

}
