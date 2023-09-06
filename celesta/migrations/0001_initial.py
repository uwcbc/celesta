# Generated by Django 3.2.18 on 2023-07-09 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=225)),
                ('last_name', models.CharField(max_length=225)),
                ('email', models.EmailField(max_length=254)),
                ('member_type', models.IntegerField(choices=[(1, 'Undergrad'), (2, 'Graduate'), (3, 'Alumni'), (4, 'Other')])),
                ('faculty', models.IntegerField(choices=[(1, 'Arts'), (2, 'Engineering'), (3, 'Environment'), (4, 'Health'), (5, 'Mathematics'), (6, 'Science')])),
                ('shirt_size', models.IntegerField(choices=[(1, 'Xs'), (2, 'S'), (3, 'M'), (4, 'L'), (5, 'Xl'), (6, 'Xxl')])),
            ],
        ),
    ]
