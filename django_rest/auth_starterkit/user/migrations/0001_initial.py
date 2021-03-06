# Generated by Django 2.1.2 on 2018-10-21 07:42

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('public_address', models.TextField(blank=True, max_length=500, unique=True)),
                ('username', models.CharField(blank=True, max_length=128)),
                ('nonce', models.UUIDField(default=uuid.uuid4)),
            ],
        ),
    ]
