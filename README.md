Shubham P. Kumbhar
#Wipro C# .Net Training 
 
 Day-1 
 Computer Architecture-Hardware, Network and Software
--------------------------------------------------------------------------------------------------------------------------------------
Ocelot in Computer Architecture
Overview:
Ocelot is an API Gateway framework for .NET, primarily used in software architectures involving 
microservices. While it isn't a hardware component, its role in managing API traffic has architectural 
implications in software design.
Architectural Significance:
• Microservices Architecture: Ocelot plays a crucial role in microservices architectures by 
acting as an intermediary between clients and services. It handles requests and routes them 
to the appropriate microservice.
• Scalability: By centralizing API management, Ocelot enables scalable architectures. It allows 
for horizontal scaling of services without changing client-side code.
• Security and Authentication: Ocelot's integration with authentication and authorization 
protocols ensures secure access to services, centralizing security measures in a single 
gateway.
• Load Balancing: Ocelot’s load balancing features distribute incoming traffic across multiple 
instances of a service, optimizing resource utilization and enhancing performance.
• Service Discovery: Integration with service discovery tools ensures that services can be 
dynamically located and accessed, supporting the dynamic nature of microservice 
architectures.
Key Components:
• Routing: Defines how requests are forwarded from the gateway to downstream services.
• Middleware Pipeline: Utilizes ASP.NET Core middleware for request processing, allowing for 
extensibility and customization.
• Configuration Management: Uses JSON configuration files to manage routing, security, and 
other settings, making it easy to modify and maintain.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Octeon in Computer Architecture:
Overview:
Octeon is a family of multi-core processors designed by Marvell, targeting networking, security, and 
storage applications. These processors are integrated into various hardware devices to provide high 
performance and specialized functions.
Architectural Significance:
• Multi-core Design: Octeon processors feature a multi-core architecture, with core counts 
ranging from a few to several dozen. This parallelism is essential for handling highthroughput networking and compute-intensive tasks.
• Specialized Hardware Blocks: Includes dedicated hardware accelerators for tasks like packet 
processing, encryption, and compression. These blocks offload specific tasks from the main 
CPU cores, improving overall efficiency and performance.
• Network Processing Units (NPUs): Octeon processors often integrate NPUs, which are 
optimized for handling network traffic at high speeds, crucial for routers and switches.
• Memory Architecture: Supports high-speed memory interfaces (e.g., DDR3/DDR4) to provide 
fast access to large data sets, essential for real-time processing in networking and security 
applications.
• I/O Interfaces: Equipped with multiple high-speed I/O interfaces (e.g., Ethernet, PCIe, USB) to 
facilitate data transfer between the processor and other components, ensuring low-latency 
communication.
Key Architectural Features:
• Packet Processing: Hardware-accelerated packet processing capabilities enable efficient 
handling of network traffic, making Octeon processors suitable for high-performance 
networking devices.
• Security: Integrated security features, including hardware-based encryption and decryption, 
provide robust data protection mechanisms, vital for security appliances.
• Energy Efficiency: Designed for energy efficiency, balancing high performance with low 
power consumption, which is crucial for embedded systems and edge devices.
Applications:
• Networking Devices: Routers, switches, and firewalls leverage Octeon’s capabilities to handle 
large volumes of network traffic efficiently.
• Security Appliances: Used in devices requiring fast encryption and decryption, such as VPNs 
and secure gateways.
• Storage Solutions: Employed in storage systems where data compression and encryption are 
needed to enhance performance and security.
In a computer architecture context, Ocelot’s role is more about software architectural patterns and 
managing distributed systems, while Octeon’s significance lies in its hardware architecture and 
capabilities tailored for high-performance, specialized computing tasks.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Types Of Processors:
1. Central Processing Units (CPUs)
• Description: General-purpose processors that execute instructions from computer programs.
• Manufacturers:
Intel: Core series (i3, i5, i7, i9), Xeon, Atom
AMD: Ryzen, Threadripper, EPYC, Athlon
ARM Holdings (designs licensed to other manufacturers): Cortex-A series, Cortex-R series 
(manufactured by Qualcomm, Samsung, Apple, etc.)
2. Graphics Processing Units (GPUs)
• Description: Specialized for parallel processing, primarily used for rendering graphics and 
accelerating AI and computational tasks.
• Manufacturers:
NVIDIA: GeForce, Quadro, Tesla, A100
AMD: Radeon, Radeon Pro
Intel: Iris, Xe
3. Digital Signal Processors (DSPs)
• Description: Optimized for real-time signal processing tasks such as audio, video, and 
communications.
• Manufacturers:
Texas Instruments: TMS320 series
Qualcomm: Hexagon DSP
Analog Devices: SHARC, Blackfin
4. Application-Specific Integrated Circuits (ASICs)
• Description: Custom-designed for specific applications, offering high performance and 
efficiency for those tasks.
• Manufacturers:
Bitmain: Antminer (for cryptocurrency mining)
Google: Tensor Processing Unit (TPU)
Broadcom: Network ASICs
5. Microcontrollers (MCUs)
• Description: Small, integrated circuits that contain a processor core, memory, and 
programmable input/output peripherals.
• Manufacturers:
Microchip Technology: PIC series, AVR series (acquired from Atmel)
STMicroelectronics: STM32 series
Texas Instruments: MSP430 series
NXP Semiconductors: Kinetis, LPC series
6. System-on-Chip (SoC)
• Description: Integrates multiple components, including CPU, GPU, memory, and I/O 
interfaces, onto a single chip.
• Manufacturers:
Apple: A-series (e.g., A14 Bionic), M-series (e.g., M1, M2)
Qualcomm: Snapdragon series
Samsung: Exynos series
MediaTek: Helio, Dimensity series
7. Network Processors
• Description: Designed for processing network traffic, such as routing and packet inspection.
• Manufacturers:
Intel: IXP series
Broadcom: StrataXGS series
Marvell: Prestera series
8. Multicore Processors
• Description: Processors with multiple cores on a single chip, allowing for parallel processing 
of tasks.
• Manufacturers:
Intel: Core i9, Xeon
AMD: Ryzen Threadripper, EPYC
IBM: Power series
9. Field-Programmable Gate Arrays (FPGAs)
• Description: Integrated circuits that can be programmed after manufacturing to perform 
specific tasks.
• Manufacturers:
Xilinx (now part of AMD): Virtex, Kintex, Artix series
Intel (formerly Altera): Stratix, Arria, Cyclone series
Lattice Semiconductor: ECP, MachXO series
10. Neural Processing Units (NPUs)
• Description: Specialized for artificial intelligence and machine learning tasks.
• Manufacturers:
Google: Tensor Processing Unit (TPU)
Huawei: Ascend NPUs
Apple: Neural Engine (part of A-series and M-series SoCs)
11. Quantum Processors
• Description: Use principles of quantum mechanics to perform computations, offering 
potential speedups for specific tasks.
• Manufacturers:
IBM: Q System One
D-Wave Systems: Quantum Annealers
Google: Sycamore
12. Embedded Processors
• Description: Used in embedded systems for controlling devices and machinery.
• Manufacturers:
ARM Holdings (designs licensed to other manufacturers): Cortex-M series
NXP Semiconductors: i.MX series
Renesas Electronics: RX, RZ series
 Summary:
 Each type of processor serves specific functions and is manufactured by various companies, each 
bringing unique capabilities and optimizations to their designs. This diversity allows for tailored 
solutions across different applications, from consumer electronics to high-performance computing 
and specialized tasks like AI and quantum computing.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Types Of Memory:
 In computer architecture, memory is an essential component that stores data and instructions 
required by the processor. 
 Different types of memory serve various purposes and have distinct characteristics. 
 Here are the main types of memory used in computer architecture:
1. Primary Memory (Main Memory)
• Description:
Directly accessible by the CPU and is used to store data that is actively being worked on.
• Types:
o Random Access Memory (RAM):
o Dynamic RAM (DRAM): Needs to be refreshed thousands of times per second. Used 
for main memory.
-SDRAM (Synchronous DRAM)
-DDR SDRAM (Double Data Rate SDRAM)
o Static RAM (SRAM): Faster and more reliable than DRAM, but more expensive. Used 
for cache memory.
o Read-Only Memory (ROM): Non-volatile memory that stores firmware and system 
boot programs.
o PROM (Programmable ROM)
o EPROM (Erasable Programmable ROM)
o EEPROM (Electrically Erasable Programmable ROM)
2. Secondary Memory
• Description:
Non-volatile memory used for long-term storage of data and programs.
• Types:
Hard Disk Drives (HDDs): Magnetic storage with large capacity but slower access time.
Solid State Drives (SSDs): Flash memory storage with faster access time and higher reliability 
than HDDs.
Optical Discs: CD, DVD, Blu-ray used for media and software distribution.
Magnetic Tapes: Used for archival storage due to high capacity and durability.
3. Cache Memory
• Description:
Small, high-speed memory located close to the CPU to reduce the time needed to access 
frequently used data.
• Levels:
L1 Cache: Integrated within the CPU chip, very fast but small in size.
L2 Cache: Larger than L1, can be located on the CPU chip or on a separate chip close to the 
CPU.
L3 Cache: Larger and slower than L1 and L2, shared among multiple CPU cores.
4. Virtual Memory
• Description:
A technique that uses a portion of secondary storage (usually an HDD or SSD) to extend the 
apparent size of primary memory, allowing for the execution of larger programs or multiple 
programs simultaneously.
• Mechanism:
Paging: Divides memory into fixed-size pages.
Segmentation: Divides memory into segments based on logical divisions of the program.
5. Flash Memory
• Description:
Non-volatile memory used for storage and transfer of data in portable devices.
• Types:
NAND Flash: Used in USB drives, SSDs, and memory cards.
NOR Flash: Used in embedded systems and firmware storage.
6. Registers
• Description:
Small, fast storage locations within the CPU used to hold temporary data and instructions 
during processing.
• Types:
Data Registers: Store intermediate data.
Address Registers: Store memory addresses.
Status Registers: Hold flags and control information.
7. Memory Modules
• Description:
 Physical implementations of memory types, typically used for RAM.
• Types:
 DIMM (Dual Inline Memory Module): Used in desktops and servers.
 SO-DIMM (Small Outline DIMM): Used in laptops and compact devices.
8. Non-Volatile Memory (NVM)
• Description:
Memory that retains data even when the power is turned off.
• Types:
Ferroelectric RAM (FeRAM): Combines the fast read/write access of RAM with the nonvolatility of flash memory.
Magnetoresistive RAM (MRAM): Uses magnetic states to store data.
Phase-Change Memory (PCM): Uses the change in state of a material to store data.
 Summary:
 Each type of memory in computer architecture is designed to balance factors such as speed, 
volatility, capacity, and cost. 
 The hierarchy and proper management of these memory types are crucial for optimizing system 
performance and efficiency.
#Number Systems:
Binary to decimal
● 11111111 - 255
● 11000101 -197
● 11110110 - 246
● 00010011 - 19
● 10000001 - 129
● 00110001 - 49
● 01111000 - 120
● 11110000 - 240
● 00111011 - 59
● 00000111 - 7
● 00011011 - 27
● 10101010 - 170
● 01101111 - 111
● 11111000 - 248
● 00100000 - 32
● 01010101 - 85
● 00111110 - 62
● 00000011 - 3
● 11101101 - 237
● 11000000 – 192
--------------------------------------------------------------------------------------------------------------------------
Decimal to binary
● 123 - 1111011
● 50 - 110010
● 255 - 11111111
● 200 - 11001000
● 10 - 1010
● 138 - 10001010
● 1 - 1
● 13 - 1101
● 250 - 11111010
● 107 - 11111010
● 224 - 11100000
● 192 - 11000000
● 172 - 10101100
● 100 - 1100100
● 119 - 1110111
● 57 - 111001
● 98 - 1100010
● 179 - 10110011
● 2 – 10
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
